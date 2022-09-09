import './bmiCal.css' ;
import React , {useState} from 'react' ;

function BmiCalculator() {
 const [weight , setWeight] =useState();
 const [height , setHeight] = useState();
 const [bmi , setBmi] =useState();
const [status , setStatus] =  useState () ;
const [color , setColor] = useState({}) ;
// this.onSetHeight = this.setHeight.bind(this)
// this.onSetWeight = this.setWeight.bind(this)


const onSetWeight = (e) => {
  const value = e.target.value ;
  setWeight(value)
}


const onSetHeight = (e) => {
const value = e.target.value;
setHeight(value)
}

 const bmiHandler = () => {
const result = (( weight /height / height ) * 10000).toFixed(1)
setBmi(result)

 let status_msg = "" ;
 let status_color = {};
 if(result < 18.5){
  status_msg = "underweight" ;
status_color = {color : "yellow"}
 }
 else if (result >= 18.5 && result <= 24.9){
  status_msg = "healthy"
  status_color = {color : "green"}
 }
 else if( result >= 25 && result <= 29.9) {
  status_msg = "overweight" ;
  status_color = {color : "yellow"}

 }
 else{
  status_msg = "obese"
  status_color = {color : "red"}
 }
 setStatus(status_msg)
 setColor(status_color)
 setWeight("")
 setHeight("")

 }



  return (
    <div className="bmi_cal_container">
   <div className="input">
    <label> Weight </label>
    <input type="number" value={weight} onChange={onSetWeight} placeholder="Enter Your weight in kg"/>
   </div>
   <div className="input">
    <label> Height </label>
    <input type="number"  value={height} onChange={onSetHeight} placeholder="Enter Your height in cm"/>
  
   </div>
   <div className="action">
    <button type="submit"  onClick={bmiHandler} disabled={ !height | !weight }>Calculate BMI</button>
   </div>
   <div className="result_dis" hidden={!bmi}>
    <span> Your BMI is : <b>{bmi}</b> , </span>
    <span >You are <b style={color}>{status}</b></span>
   </div>
    </div>
  );
}

export default BmiCalculator;
