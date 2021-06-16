import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import ENDPOINT from '../../config/config'
import * as LoginStyles from './Login.module.css'
import Logo from '../../gooddeedslogo.png'

const Login = ({ setLoggedIn }) => {
	const [redirect, setRedirect] = useState(false)

	const url = ENDPOINT + '/users/login'

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
		}

		axios.post(url, data).then((res) => {
			window.localStorage.setItem('user', JSON.stringify(res.data))
			const { token } = JSON.parse(window.localStorage.getItem('user'))
			if (token) {
				setLoggedIn(true)
				setRedirect(true)
			}
		})
	}

	if (redirect) {
		return <Redirect to={`/home`} />
	}

	return (
		<div className='login-page'>
			<h1 className={LoginStyles.welcome}>
				Welcome
				<br /> to <br />
				<img className={LoginStyles.logo} src={Logo}></img>
			</h1>
			<form className={LoginStyles.form} onSubmit={handleSubmit}>
				<center>
					<label className={LoginStyles.username} htmlFor='username'>
						Username:
					</label>
					<input id='username' className='login-field' type='text' />
				</center>
				<br />
				<center>
					<label htmlFor='password'>Password:</label>
					<input id='password' className='login-field' type='password' />
				</center>
				<center>
					<br />
					<button className={LoginStyles.login} type='submit'>
						Login
					</button>
				</center>
				<center>
					<br />
					<div className={LoginStyles.createText}>
						<p className={LoginStyles.or}>OR</p>
						<p >CREATE AN ACCOUNT</p>
					</div>
					<Link to='/register'>
						<button className={LoginStyles.signup} type='submit'>
							SIGN UP!
						</button>
					</Link>
				</center>
			</form>
		</div>
	)
}

export default Login
