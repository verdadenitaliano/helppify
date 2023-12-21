// LoginForm.js
import React, { Component } from 'react';
import "./LoginForm.css";
import loginImg from '../../assets/loginImg.png'
import SignupForm from "../Signup/SignupForm";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			users: [],
		};
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const { username, password, users } = this.state;
		const newUser = {
			username,
			password,
		};
		this.setState(
			{
				users: [...users, newUser],
				username: "",
				password: "",
			},
		);
	};

	render() {
		const { username, password, users } = this.state;

		return (
			<div className="login-container">
				<div className="login-form">
					<h1>Iniciar sesión</h1>
					<form onSubmit={this.handleFormSubmit}>
						<div className="form-group">
							<label htmlFor="username">Correo electrónico:</label>
							<input
								type="text"
								id="username"
								name="username"
								value={username}
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Contraseña:</label>
							<input
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="">
							<a href={SignupForm}>Olvidé mi contraseña</a>
						</div>
						<button type="submit">Conectarme</button>
						<div className="">
						<a href={SignupForm}>¿Aún no tienes helppify? Créalo acá</a>
						</div>
					</form>
				</div>
				{/*<div className="login-img">*/}
				{/*	<img src={cardCheck}/>*/}
				{/*</div>*/}
				{/*<div className="user-table">*/}
				{/*	<h2>User Table</h2>*/}
				{/*	<table>*/}
				{/*		<thead>*/}
				{/*		<tr>*/}
				{/*			<th>Username</th>*/}
				{/*			<th>Password</th>*/}
				{/*		</tr>*/}
				{/*		</thead>*/}
				{/*		<tbody>*/}
				{/*		{users.map((user, index) => (*/}
				{/*			<tr key={index}>*/}
				{/*				<td>{user.username}</td>*/}
				{/*				<td>{user.password}</td>*/}
				{/*			</tr>*/}
				{/*		))}*/}
				{/*		</tbody>*/}
				{/*	</table>*/}
				{/*</div>*/}
				<div className="img-container">
					<div className="login-img">
						<img src={loginImg}/>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginForm;
