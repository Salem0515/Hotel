import React, { useState } from 'react';
import './SigninSignup.css';
import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

export const SigninSignup = () => {
  const [action, setAction] = useState("LogIn"); // Use lowercase for state variable
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Check if all required fields are filled
  const isFormValid = formData.email && formData.password && (action === "LogIn" || formData.name);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegistration = (event) => {
    event.preventDefault(); // Prevent form submission
    if (isFormValid) {
      alert('Registration Successful 😊. Thanks for visiting this site ❤️'); // Show alert
      window.location.href = '/'; // Redirect to Home (adjust the path if needed)
    } else {
      alert('Please fill out all required fields.'); // Show error if form is invalid
    }
  };

  return (
    <div className="log">
      <div className='containerrr'>
        <div className="headerrr">
          <div className="texttt">{action}</div>
          <div className="underlineee"></div>
        </div>
        
        <form onSubmit={handleRegistration}>
          <div className="inputsss">
            {action === "SignUp" && ( // Use lowercase state variable
              <div className="inputtt">
                <img src={user_icon} alt="User Icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required // Ensure field is required
                />
              </div>
            )}

            <div className="inputtt">
              <img src={email_icon} alt="Email Icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required // Ensure field is required
              />
            </div>

            <div className="inputtt">
              <img src={password_icon} alt="Password Icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required // Ensure field is required
              />
            </div>
          </div>

          {action === "LogIn" && ( // Use lowercase state variable
            <div className="forget-passworddd">
              Lost Password <span>Click Here!</span>
            </div>
          )}

          <div className="submit-containerrr">
            <div
              className={action === "LogIn" ? "submittt grayyy" : "submittt"} // Use lowercase state variable
              onClick={() => { setAction("SignUp"); }}
            >
              SignUp
            </div>
            <div
              className={action === "SignUp" ? "submittt grayyy" : "submittt"} // Use lowercase state variable
              onClick={() => { setAction("LogIn"); }} // Corrected typo ("Login" -> "LogIn")
            >
              LogIn
            </div>
          </div>

          {/* Show Submit button only when form is valid */}
          {isFormValid && (
            <button className="submiting" type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};