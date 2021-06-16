import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import ENDPOINT from '../../config/config'
import * as LoginStyles from './Login.module.css'

const Login = () => {
	const [redirect, setRedirect] = useState(false)

	const url = ENDPOINT + '/users/login'

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
		}

		axios
			.post(url, data)
			.then((res) =>
				window.localStorage.setItem('user', JSON.stringify(res.data))
			)
			.then(() => setRedirect(true))
	}

	if (redirect) {
		return <Redirect to={`/add`} />
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
			<Link to='/register'>
				<button>Sign Up!</button>
			</Link>
		</div>
	)
}

export default Login
