import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handleOtpChange(event) {
    setOtp(event.target.value);
  }

  async function sendOtp() {
    try {
      await axios.post('/api/send-otp', { phoneNumber });
      setOtpSent(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function verifyOtp() {
    try {
      await axios.post('/api/verify-otp', { phoneNumber, otp });
      console.log('OTP verified!');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>OTP Verification</h1>
      <br></br>
      {otpSent ? (
       
       <>
       <p>Enter the OTP sent to your phone number:</p>
       <div>
       <input type="text" maxLength="1" style={{ width: '3rem', marginRight: '1rem' }} value={otp} onChange={handleOtpChange} />
       <input type="text" maxLength="1" style={{ width: '3rem', marginRight: '1rem' }} value={otp} onChange={handleOtpChange} />
       <input type="text" maxLength="1" style={{ width: '3rem', marginRight: '1rem' }} value={otp} onChange={handleOtpChange} />
       
       </div>
       <button onClick={verifyOtp}>Verify OTP</button>
     </>
   ) : (
        <>
         <p>Enter the OTP sent to your phone number:</p>
         <br></br>
          <input type="text" style={{ 
          width: '200px', 
          height: '30px',
          
        }}  value={otp} onChange={handleOtpChange} />
          <br></br>
          <br></br>
          <button style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '5px',
          height: '30px' 
        }} onClick={verifyOtp}>Verify OTP</button>
    
        </>
      )}
      <br></br>
      <p><a href="/otp" style={{ 
          textDecoration: 'none',
          color: '#f1356d',
          
         
        }}>Get the code again</a></p>
    </div>
  );
}

export default App;
