from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import tensorflow as tf

# Initialize the Flask application
app = Flask(__name__)
CORS(app)
# Load the trained model
model = tf.keras.models.load_model('./model/pneumonia_detection.h5')

def preprocess_image(image, target_size):
    """Preprocess the image to the target size required by the model."""
    image = image.convert('RGB')  # Ensure the image is in RGB format
    image = image.resize(target_size)  # Resize the image to the target size
    image = np.array(image)  # Convert the image to a numpy array
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    image = image / 255.0  # Rescale the image
    return image

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No file selected for uploading'}), 400

    try:
        # Load and preprocess the image
        image = Image.open(file)
        processed_image = preprocess_image(image, target_size=(256, 256))

        # Make prediction
        prediction = model.predict(processed_image)
        predicted_class = np.argmax(prediction, axis=1)[0]

        # Prepare the response
        class_labels = {0: 'NORMAL', 1: 'PNEUMONIA'}
        response = {
            'prediction': class_labels.get(predicted_class, 'Unknown')
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
