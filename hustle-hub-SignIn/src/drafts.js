import React, { useState } from 'react';

function OtpInput(props) {
  const [otp, setOtp] = useState(Array(props.numInputs).fill(''));

  function handleChange(event, index) {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    if (event.target.value.length === 1 && index < props.numInputs - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`input-${index}`}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(event) => handleChange(event, index)}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Example OTP Input</h1>
      <OtpInput numInputs={6} />
    </div>
  );
}

export default App;