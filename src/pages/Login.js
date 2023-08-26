import React, { useContext } from 'react';
import '../css/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className='auth'>
        <div className='login_form'>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='Username' name="username" onChange={handleChange}/>
                <input type='password' placeholder='Password' name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                <br></br>
                {err && <p id='p_error'>{err}</p>}
                <p>Don't you have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login