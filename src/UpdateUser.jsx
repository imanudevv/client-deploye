import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateUser.css'; 

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/getUser/${id}`)
      .then(result => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch(err => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios.put(`${API_BASE_URL}/updateUser/${id}`, { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='update-user-container'>
      <div className='update-user-card'>
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className='btn-submit'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;