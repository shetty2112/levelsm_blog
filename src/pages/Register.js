import React from 'react';
import '../css/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      navigate("/login");
      console.log(res)
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className='auth'>
        <div className='login_form'>
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='Username' name="username" onChange={handleChange}/>
                <input type='email' placeholder='Email id' name="email" onChange={handleChange}/>
                <input type='password' placeholder='Password' name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                <br></br>
                {err && <p id='p_error'>{err}</p>}
                <p>Do you have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Register