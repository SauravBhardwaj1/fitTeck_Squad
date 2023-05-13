import React from 'react'
import BMI from "./Image/BMI.avif"
const Bmi = () => {
  return (

    <div className='flex w-[90%] m-auto justify-between border border-black'>
        <div className='flex-initial w-40 border border-indigo-600 '>
            <form>
              
            </form>
        </div>
        <div className='flex-initial w-55 border border-red-600' >
            <img src={BMI}></img>
        </div>
    </div>
  )
}

export default Bmi
