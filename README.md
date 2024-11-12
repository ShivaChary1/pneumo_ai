# Pneumonia Detection App

This web application uses deep learning to detect pneumonia from chest X-ray images. The app has a React-based frontend and a Flask-based backend. The backend includes a trained convolutional neural network (CNN) model that classifies chest X-ray images to detect pneumonia.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- Upload chest X-ray images to receive real-time pneumonia detection results.
- Simple, user-friendly interface for easy interaction.
- High-accuracy pneumonia predictions using a pre-trained CNN model.
- Flask API for efficient backend image processing.
- Ready-to-deploy frontend and backend.

## Tech Stack

### Frontend
- **React**: For building the UI.
- **Axios**: For making HTTP requests to the Flask backend.
- **Tailwind CSS** (optional): For styling components.

### Backend
- **Flask**: Lightweight Python web framework.
- **TensorFlow/Keras**: For running the CNN model for image classification.
- **Flask-CORS**: To handle CORS issues between frontend and backend.

### Model
- **Deep Learning Model**: CNN model trained on a dataset of chest X-rays for pneumonia classification.

## Installation

### Prerequisites
- **Node.js** and **npm** for frontend setup.
- **Python 3.x** for backend setup.
- **Virtual Environment** (recommended for the backend).

### Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/pneumonia-detection-app.git
    cd pneumo_ai
    ```

2. **Backend Setup**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
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
   - Set up any required environment variables (e.g., API endpoints) in both the Flask app and the React app configuration files.

## Usage

- Open the application in your browser. The frontend typically runs at `http://localhost:3000`, and the backend runs at `http://localhost:5000`.
- Upload a chest X-ray image, and the app will return a prediction indicating whether pneumonia is detected.

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
- **Deployment**: Deploy the app to cloud platforms like AWS, Heroku, or Render for wider access.

## License

This project is open-source and available under the MIT License. See the `LICENSE` file for details.
