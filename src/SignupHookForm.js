import React from 'react';
import { useForm } from 'react-hook-form';

const SignupHookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>First Name </label>
        <input type='text' {...register('firstName')} />

        <label htmlFor='lastName'>Last Name </label>
        <input type='text' {...register('lastName')} />

        <label htmlFor='email'>Email </label>
        <input type='email' {...register('email')} />

        <label htmlFor='password'>Password </label>
        <input type='password' {...register('password')} />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default SignupHookForm;
