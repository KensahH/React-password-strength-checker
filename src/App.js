import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {
  const[password, setPassword] = useState("")
  const[message, setMessage] = useState("")

function handleChange(e){

  setPassword(e.target.value)
}

const handleValidation=(e)=>{

if(password ===""){
setMessage("password can't be empty")

}else if(password.length<4){
setMessage("password is weak")

}else if(password.length >4 && password.length <=8){
setMessage("password is medium")

}else if(password.length>8){
setMessage("password is strong")
}
}



  return (
    <div>
      <h3 className="password"> password strength checker</h3>
      <input className="input" type="password" onChange={handleChange} placeholder="enter password"></input>
      <button onClick={handleValidation} className="btn">check</button>
      <p className="message">{message}</p>
    </div>
  );
}
