import React, { useState } from 'react';

function PhoneNumberInput(props) {
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleChange(event) {
    setPhoneNumber(event.target.value);
  }

  return (
    <label>
      Phone number:
      <input type="tel" value={phoneNumber} onChange={handleChange} />
    </label>
  );
}

function Form(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone number:', props.phoneNumber);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <PhoneNumberInput phoneNumber={props.phoneNumber} />
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <h1>Example Form</h1>
      <Form phoneNumber="" />
    </div>
  );
}

export default App;
