import React from 'react';
import "../../css/ContactUs/ContactUsForm.css"
import Button from '../../components/Button';
import emailjs from 'emailjs-com';
import { useState} from 'react';
import Tooltip from "../../components/ContactUs/Tooltip.js";

const ContactUsForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: '',
      });
    
      const [responseMessage, setResponseMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_kk4d6rz', 'template_5do3pvo', formData, '-DuVhnlG90-MCA25b')
          .then((response) => {
            setResponseMessage('Message sent successfully!');
            //alert('Message sent successfully!');
          })
          .catch((error) => {
            setResponseMessage('Failed to send the message. Please try again later.');
            console.error('Error:', error);
            //alert('Failed to send the message. Please try again later.');
          });
      };

    return (
      
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">

          <Tooltip text="Enter Your Full Name">
          
            <label htmlFor="name">
              <span className="requiredIcon">*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter Your Full Name"
              />
            </label>
            </Tooltip>

            <Tooltip text="Enter Your Email Address">
              <label htmlFor="email">
                <span className="requiredIcon">*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email Address"
                />
              </label>
            </Tooltip>

            <Tooltip text="Enter Your Contact Number">
              <label htmlFor="contactNumber">
                <span className="requiredIcon">&nbsp;&nbsp;</span>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                />
              </label>
            </Tooltip>

            <Tooltip text="Enter Subject">
              <label htmlFor="subject">
                <span className="requiredIcon">*</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter Subject"
                />
              </label>
            </Tooltip>

            <Tooltip text="Enter Message">
              <label htmlFor="message">
                <span className="requiredIcon">*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter Message"
                ></textarea>
              </label>
            </Tooltip>

            <div className="submitContainer">
              <Button type="submit">Send</Button>
            </div>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
  };
  
  export default ContactUsForm;