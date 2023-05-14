import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface data {
  weight: number;
  feet: number;
  inch: number;
}
const Bmi = () => {
  const [data, setData] = useState<data>({
    weight: 0,
    feet: 0,
    inch: 0,
  });

  const [status, setStatus] = useState<string>("");
  const [bmi, setBmi] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    let name: string = e.target.name;
    let value: number = +e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let totalHeight: number = data.feet * 12 + data.inch;
    let temp: number = +(data.weight / (0.0254 * totalHeight) ** 2);

    setBmi(temp.toFixed(1));

    if (temp < 18.5) {
      console.log("Under Weight");
      setStatus("Underweight");
    } else if (temp >= 18.5 && temp < 25) {
      console.log("Normal Weight");
      setStatus("Normal Weight");
    } else if (temp >= 25 && temp < 30) {
      console.log("Over Weight");
      setStatus("Over Weight");
    } else if (temp >= 30 && temp < 36) {
      console.log("obese");
      setStatus("Obese");
    } else {
      setStatus("Morbid Obese");
    }

    setData({ weight: 0, feet: 0, inch: 0 });
  };

  return (
    <>
      <Navbar />
      <br />

      <div className="flex w-[90%]  m-auto justify-between border border-black">
        <div className="flex-initial w-[40%]  ">
          <form className="mt-20" onSubmit={handleSubmit}>
            <label>Weight: &nbsp;</label>
            <input
              placeholder="Enter Your Weight"
              name="weight"
              value={data.weight || ""}
              onChange={handleChange}
              className="w-[38%] border-slate-950"
            ></input>
            <br />
            <label>Height: &nbsp;</label>
            <input
              placeholder="Feet"
              name="feet"
              value={data.feet || ""}
              onChange={handleChange}
              className="w-[38%]"
            ></input>
            <br />
            <input
              placeholder="Inch"
              name="inch"
              value={data.inch || ""}
              onChange={handleChange}
              className="w-[27%]"
            ></input>
            <br></br>
            <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Calculate</button>
          </form>
          <div>
            <h2>{bmi}</h2>
            <h2>Status:{status}</h2>
          </div>
        </div>
        <div className="flex-initial w-[55%] ">
          <img
            src="https://img.freepik.com/premium-vector/body-mass-index-control-pretty-young-woman-diet-trying-control-body-weight-with-bmi-girl-stands-scale-healthy-fat-measurement-method-obesity-underweight-extremely-obese-chart-scales_458444-957.jpg?w=1380"
            alt="bmi"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bmi;
