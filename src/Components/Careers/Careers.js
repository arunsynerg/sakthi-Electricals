import './Careers.css'

import React, { useState } from 'react';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phonenumber, email, message, resume } = formData;
    // Send form data to the server for email sending logic
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phonenumber, email, message, resume }),
    });
    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className='career-page-container'>
    <div className='career-page'>
      <h2>Careers</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Phone Number:</label>
          <input type="number" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Resume:</label>
          <input type="file" name="resume" onChange={handleFileChange} required />
        </div>
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
    </div>
    </div> 
  );
};

export default CareerPage;
