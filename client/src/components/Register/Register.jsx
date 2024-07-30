import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [id]:value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:3001/api/register', formData);
        console.log(response.data);
    }
    catch(err)
    {
        console.error(err);
    }
  }

  return (
    <div className="formHolder">
      <div className="form">
        <h1 className="head">Register</h1>
        <form onClick={handleSubmit}>
          <input type="text" placeholder="Username" id="userName" onChange={handleChange}/>
          <br />
          <input type="email" placeholder="Email" id="email" onChange={handleChange}/>
          <br />
          <input type="password" placeholder="Password" id="password" onChange={handleChange}/>
          <br />
          <input type="submit" value="Register" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Register;
