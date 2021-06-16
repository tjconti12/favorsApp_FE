import { useState } from 'react'
import axios from 'axios'
import ENDPOINT from '../../config/config'
import * as LoginStyles from './Login.module.css'

const Login = () => {
	// const [username, setUsername] = useState('')
	// const [password, setPassword] = useState('')
	// const [jwt, setJwt] = useState('')

	const url = ENDPOINT + '/users/login'

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
		}

		axios.post(url, data).then((res) => localStorage.setItem('token', res.data))
	}

	return (
		<div className='login-page'>
			<h1 className={LoginStyles.welcome}>Welcome<br /> to <br />Güdeeds</h1>
			<form className={LoginStyles.form} onSubmit={handleSubmit}>
				<center>
					<label className={LoginStyles.username} htmlFor='username'>Username:</label>
					<input id='username' className='login-field' type='text' />
				</center>
				<br />
				<center>
					<label htmlFor='password'>Password:</label>
					<input id='password' className='login-field' type='password' />
				</center>
				<center>
					<br />
					<button className={LoginStyles.login} type='submit'>Login</button>
				</center>
				<center>
					<br />
					<div>
						<p className={LoginStyles.createText}>OR</p>
						<p className={LoginStyles.createText}>CREATE AN ACCOUNT</p>
					</div>
					<button className={LoginStyles.signup} type='submit'>SIGN UP!</button>
				</center>

			</form>
		</div>
	)
}

export default Login
