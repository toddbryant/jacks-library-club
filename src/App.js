import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css"
import logo from './logo.svg';
import './App.css';
import { Auth } from "aws-amplify";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jack's Library Club
        </p>
	<Login />
     </header>
    </div>
  );
}

export function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	async function handleSubmit(event) {
		event.preventDefault();
		
		try {
			await Auth.signIn(email, password);
			alert("OH my god log in worked lol");
		} catch(e) {
		    alert(e.message);
		}
	
		alert("lol this does not work yet but come back soon")
	}

	return (
		<div className="Login">
			<form onSubmit={handleSubmit}>
				<FormGroup controlId="email" bsSize="large">
				<FormLabel>Email</FormLabel>
				<FormControl
					autoFocus
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<FormLabel>Password</FormLabel>
					<FormControl
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
					/>
				</FormGroup>
				<Button block bsSize="large" disabled={!validateForm()} type="submit">
					Login
				</Button>
			</form>
		</div>
	);
}

export default App;
