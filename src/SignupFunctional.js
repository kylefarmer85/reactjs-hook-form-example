
import React, { useState } from 'react';

const SignupFunctional = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
    console.log(firstName, lastName, email, password);
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name </label>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor='lastName'>Last Name </label>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor='email'>Email </label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default SignupFunctional;