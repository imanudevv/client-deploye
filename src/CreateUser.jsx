import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css'; 


const API_BASE_URL = import.meta.env.VITE_BACKEND_URL
const CreateUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/createUser`, {name, email, age})
    .then(result => { 
      console.log(result);
      navigate('/');
    })
    .catch(err => console.log(err));
  };

  return (
    
    <div className='create-user-container'>
      <div className='create-user-card'>
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter Email'
              className='form-control'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              placeholder='Enter Age'
              className='form-control'
              value={age}
              onChange={(e)=>setAge(e.target.value)}
            />
          </div>
          <button type="submit" className='btn-submit'>Submit</button>
          
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
