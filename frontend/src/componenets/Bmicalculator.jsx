import { useState } from "react"
import { toast } from "react-toastify";


const Bmicalculator = () => {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [gender,setGender]=useState("");
  const [bmi,setBmi]=useState("");
{bmi}
  const calculatebmi = (e)=>{
    e.preventDefault();

    if(!height|| !weight || !gender){
      toast.error('please enter valid height,weight and gender.');
      return;
    }
    const heightInMeters=height/100;
    const bmivalue=(weight/(heightInMeters*heightInMeters)).toFixed(2);
    setBmi(bmivalue);

    if(bmivalue<18){
      toast.warning("You are underWeight 🚩.... Consider seeking advice from a healthcare provider.")
    }
    else if(bmivalue>=18 && bmivalue<25){
      toast.success("You have Normal weight ✅..... Keap maintaing a healthy LifeStyle.")
    }
    else if(bmivalue>=25 && bmivalue<30){
      toast.warning("You have Overweight ❌......  Consider seeking advice from a healthcare provider.")
    }else{
      toast.error("You are in obese range 🚫.... It is recommende to seek advice from HealthCare specialist.")
      
    }



  }
  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculatebmi}>
            <div>
              <label>Heigth (cm)</label>
              <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} required/>
            </div>
            <div>
              <label>Weight (kg)</label>
              <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} required/>
            </div>
            <div>
              <label>Gender </label>
             <select value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

             </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiimage" />
        </div>

      </div>
    </section>
  )
}

export default Bmicalculator