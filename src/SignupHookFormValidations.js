import React from 'react';
import { useForm } from 'react-hook-form';

const SignupHookFormValidations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>First Name </label>
        <input
          type='text'
          {...register('firstName', {
            required: 'First name is required'
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor='lastName'>Last Name </label>
        <input
          type='text'
          {...register('lastName', {
            required: 'Last name required'
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor='email'>Email </label>
        <input
          type='email'
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor='password'>Password </label>
        <input
          type='password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 4,
              message: 'Password must be at least 4 characters'
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default SignupHookFormValidations;
