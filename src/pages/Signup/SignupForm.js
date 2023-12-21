import React, { Component } from 'react';
import "../Login/LoginForm.css";
import DatePicker from 'react-datepicker';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      users: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { step, email, password, users } = this.state;
    const newUser = {
      email,
      password,
    };
    this.setState(
        {
          users: [...users, newUser],
          email: "",
          password: "",
        },
    );

    if (step === 1 && this.state.email && this.state.password) {
      this.setState({ step: 2 });
    } else if (step === 2 && this.state.firstName && this.state.lastName) {
      // You can proceed to the next step or perform any other actions here
      console.log('Registration complete:', this.state);
    }
  };

  render() {
    const { step, email, password, firstName, lastName } = this.state;

    return (
      <div className="login-container">
        {step === 1 && (
          <div className="login-form">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label>
                  Correo electrónico:
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Contraseña:
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button type="submit">Next</button>
            </form>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={this.handleFormSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </label>
            {/*Pending create the event and to modify the css for the date picker and control*/}
            <DatePicker
                label="Helper text example"
                slotProps={{
                  textField: {
                    helperText: 'MM/DD/YYYY',
                  },
                }}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default SignupForm;
