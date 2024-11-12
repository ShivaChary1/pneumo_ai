# Pneumonia Detection App

This project is a web application that uses deep learning to detect pneumonia from chest X-ray images. The app's frontend is built with React, while the backend is developed using Flask. The backend includes a trained convolutional neural network (CNN) model to classify images for pneumonia detection.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- Upload chest X-ray images and receive real-time predictions.
- Simple, user-friendly interface for easy interaction.
- Accurate pneumonia prediction using a pre-trained CNN model.
- Flask API for efficient backend processing of images.
- Fully deployed frontend and backend, ready for production.

## Tech Stack

### Frontend
- **React**: Framework for building the UI.
- **Axios**: For making HTTP requests to the Flask backend.
- **Tailwind CSS** (optional): For styling components.

### Backend
- **Flask**: Lightweight Python web framework.
- **TensorFlow/Keras**: For loading and running the CNN model for image classification.
- **Flask-CORS**: To handle CORS issues between the frontend and backend.

### Model
- **Deep Learning Model**: CNN model trained on a dataset of chest X-rays to classify pneumonia cases.

## Installation

### Prerequisites
- Node.js and npm
- Python 3.x
- Virtual environment (optional but recommended)

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/pneumonia-detection-app.git
    cd pneumonia-detection-app
    ```

2. **Backend Setup**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Set up a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install the dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the Flask server:
     ```bash
     flask run
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React app:
     ```bash
     npm start
     ```

4. **Environment Variables**:
   - Set up any required environment variables (e.g., API endpoints) as necessary in both the Flask app and the React app configuration files.

## Usage

- Open the application in your browser (usually at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend).
- Upload a chest X-ray image, and the app will return a prediction indicating whether pneumonia is detected or not.

## Project Structure

```
pneumonia-detection-app/
│
├── backend/
│   ├── app.py                 # Flask app entry point
│   ├── model/                 # Directory containing the ML model
│   ├── requirements.txt       # Backend dependencies
│   └── ...                    # Additional Flask modules and files
│
└── frontend/
    ├── public/                # Static assets
    ├── src/                   # Source files
    │   ├── App.js             # Main React component
    │   ├── components/        # React components
    │   ├── services/          # Axios API service
    │   └── ...
    ├── package.json           # Frontend dependencies
    └── ...
```

## Future Improvements

- **Enhanced Model**: Experiment with different model architectures to improve accuracy.
- **Additional Features**: Add more visualization tools or image preprocessing options.
- **Deployment**: Deploy the app to platforms like AWS, Heroku, or Render.

## License

This project is open-source and available under the MIT License. See the `LICENSE` file for details.
 
