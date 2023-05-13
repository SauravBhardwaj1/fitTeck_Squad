import React, { useEffect, useState } from 'react'
// import data from "./Image/data.avif"

import BMI from "./Image/BMI.avif"

interface data{
  weight:number,
  feet:number,
  inch:number,
  
}
const Bmi = () => {
  const[data,setData] = useState<data>({
    weight:0,
    feet:0,
    inch:0,
    
  })

  const[status,setStatus] = useState<string>("");
  const[bmi,setBmi] = useState<string>("")



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value)
    let name:string = e.target.name;
    let value:number = +e.target.value
    setData({...data,[name]:value});
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    let totalHeight:number = ((data.feet*12)+(data.inch))
    let temp:number = +(data.weight/((0.0254*totalHeight)**2))

    setBmi(temp.toFixed(1));

    if(temp<18.5){
      console.log("Under Weight")
      setStatus("Underweight")
    }else if(temp>=18.5 && temp<25){
      console.log("Normal Weight")
      setStatus("Normal Weight")

    }else if(temp>=25 && temp<30){
      console.log("Over Weight")
      setStatus("Over Weight")

    }
    else if(temp>=30 && temp<36){
      console.log("obese")
      setStatus("Obese")
    }else{
      setStatus("Morbid Obese")
    }
    


    
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
              <br/>
              <input placeholder='Inch' name="inch" value={data.inch || ""} onChange={handleChange}  ></input>
              <br></br>
              <button className='border border-blue-400'>Calculate</button>
            </form>
            <div>
              <h2>{bmi}</h2>
              <h2>Status:{status}</h2>
            </div>
        </div>
        <div className='flex-initial w-[55%] border border-red-600' >
            <img src={BMI}></img>
        </div>
    </div>
  )
}

export default Bmi
