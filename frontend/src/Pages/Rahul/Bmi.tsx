import React, { useState } from 'react'
// import data from "./Image/data.avif"

import BMI from "./Image/BMI.avif"

interface data{
  weight:number,
  feet:number,
  inch:number
}
const Bmi = () => {
  const[data,setData] = useState<data>({
    weight:0,
    feet:0,
    inch:0
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value)
    let name:string = e.target.name;
    let value:number = +e.target.value
    setData({...data,[name]:value});
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    let totalHeight:number = ((data.feet*12)+(data.inch))
    let bmi:number = data.weight/((0.0254*totalHeight)**2)
    console.log(bmi.toFixed(1))
    
    setData({weight:0,feet:0,inch:0})

  }


  return (

    <div className='flex w-[90%] m-auto justify-between border border-black'>
        <div className='flex-initial w-[40%] border border-indigo-600 '>
            <form className='mt-5 border border-fuchsia-500' onSubmit={handleSubmit} >
              <label>Weight:</label>
              <input placeholder='Enter Your Weight' name="weight" value={data.weight||""} onChange={handleChange}></input>
              <br />
              <label>Height:</label>
              <input placeholder='Feet' name="feet" value={data.feet || ""} onChange={handleChange} ></input>
              <input placeholder='Inch' name="inch" value={data.inch || ""} onChange={handleChange}  ></input>
              <br></br>
              <button className='border border-blue-400'>Calculate</button>
            </form>
        </div>
        <div className='flex-initial w-[55%] border border-red-600' >
            <img src={BMI}></img>
        </div>
    </div>
  )
}

export default Bmi
