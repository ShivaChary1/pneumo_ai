import React from 'react'
import './prediction.css'
import Hcard from './healthcard/Hcard'
import Lottie from 'lottie-react'
import Yoga from '../../../assets/yoga.json'
import Pres from '../../../assets/dangerRes.json'
import {motion} from 'framer-motion'



const Prediction = (prop) => {
  let result = prop.prediction;
  console.log(result)
  return (
    <>
    {result==='PNEUMONIA'?<>
    <motion.div initial={{ y: "90px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "ease-in" }} style={{height:"100vh"}} className='pred_outer'>
    <span className='ml-10'>
      <a
        href='http://localhost:5173/trynow'
        className='rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        New Scan
      </a> &nbsp; &nbsp;
      <a
        href='http://localhost:5173/'
        className='rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Home
      </a>
      </span>
      <div className="result">
        <h1 className='res_data text-3xl'>Result: Pneumonia <br />You Should Take some action ASAP!</h1>
        <Lottie animationData={Pres} className='res_anima'/>
        <div className='hcard_div'>
          <Hcard/>
        </div>
      </div>
    </motion.div>
    </>:
    <motion.div initial={{ y: "90px", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, type: "ease-in" }} style={{height:"100vh"}} className='pred_outer'>
      <span className='ml-10'>
      <a
        href='http://localhost:5173/trynow'
        className='rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        New Scan
      </a> &nbsp; &nbsp;
      <a
        href='http://localhost:5173/'
        className='rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Home
      </a>
      </span>
      <div className="result">
        <h1 className='res_data pt-3 text-3xl'>Result: Normal <br/> You're Perfectly alright, Take a Breath!</h1>
        <Lottie className='res_anima' animationData={Yoga} />
        <div className='hcard_div'>
        <Hcard/>
        </div>
      </div>
    </motion.div>
    }
    <br />
    <br />
    </>
  )
}

export default Prediction
