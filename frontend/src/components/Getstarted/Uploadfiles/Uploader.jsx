import React, { useState } from 'react';
import axios from 'axios';
import './uploader.css';
import { MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import uploadsvg from '../../../assets/uploadimg.json';
import Prediction from './Prediction';
import Loader from './Loader'; // Ensure you have a Loader component

const Uploader = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState("No file uploaded");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false); // Changed from `loader` to `loading`

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    setLoading(true); // Set loading to true when upload starts

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setTimeout(() => { // Add a delay to simulate the loader
        setPrediction(response.data.prediction);
        setLoading(false); // Set loading to false after prediction is received
      }, 8345);
    } catch (error) {
      console.error('Error uploading file:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : prediction == null ? (
        <motion.div
          initial={{ y: "90px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "ease-in" }}
          className='main_div'
        >
          <h1 className='text-2xl h1_h1 font-bold text-indigo-600'>Upload an Image</h1>

          <form onSubmit={handleUpload}>
            <div onClick={() => document.querySelector(".img-upload").click()} className='form_box'>
              <input
                hidden
                type="file"
                name="file"
                className='img-upload'
                accept='image/*'
                onChange={({ target: { files } }) => {
                  files[0] && setFile(files[0].name);
                  if (files) {
                    setImage(files[0]);
                  }
                }}
              />
              {image ? (
                <img src={URL.createObjectURL(image)} width={150} height={150} alt={file} />
              ) : (
                <>
                  <Lottie animationData={uploadsvg} className='h-36' />
                  <p className='mt-4'>Click to upload a file</p>
                </>
              )}
            </div>

            <section className='uploaded_row'>
              <AiFillFileImage color='#000000' />
              {file}{"  "}
              <MdDelete
                onClick={() => {
                  setFile("No file uploaded");
                  setImage(null);
                  setPrediction(null);
                }}
              />
            </section>

            <div className='flex justify-center'>
              <button
                type="submit"
                className='rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Predict
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <Prediction prediction={prediction} />
      )}
    </>
  );
};

export default Uploader;