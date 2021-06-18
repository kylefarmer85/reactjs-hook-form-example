import React, { Component } from 'react';

class SignupClass extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name </label>
          <input
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label htmlFor='lastName'>Last Name </label>
          <input
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label htmlFor='email'>Email </label>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password </label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  }
}

export default SignupClass;
