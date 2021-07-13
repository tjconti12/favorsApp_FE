import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
} from '@material-ui/core'
import axios from 'axios'

import ENDPOINT from '../../config/config'
import * as LoginStyles from './Login.module.css'
import Logo from '../../gooddeedslogo.png'

const Login = ({ setLoggedIn }) => {
	const [redirect, setRedirect] = useState(false)
	const [usernameError, setUsernameError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const url = ENDPOINT + '/users/login'
		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
		}

		axios
			.post(url, data)
			.then((res) => {
				const { userFound, isPasswordValid } = res.data

				if (!userFound) return setUsernameError(true)
				if (!isPasswordValid) return setPasswordError(true)

				window.localStorage.setItem('user', JSON.stringify(res.data))
				const { token } = JSON.parse(window.localStorage.getItem('user'))
				if (token) {
					setLoggedIn(true)
					setRedirect(true)
				}
			})
			.catch((err) => {
				console.error(err)
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
				<img className={LoginStyles.logo} src={Logo} alt=''></img>
			</h1>
			<form className={LoginStyles.form} onSubmit={handleSubmit}>
				<center>
					<FormControl variant='outlined'>
						<InputLabel htmlFor='username'>Username</InputLabel>
						{usernameError ? (
							<OutlinedInput
								id='username'
								className='login-field'
								type='text'
								label='username'
								error
							/>
						) : (
							<OutlinedInput
								id='username'
								className='login-field'
								type='text'
								label='username'
							/>
						)}
						{usernameError && (
							<FormHelperText error id='username-error'>
								Username not found!
							</FormHelperText>
						)}
					</FormControl>
				</center>
				<br />
				<center>
					<FormControl variant='outlined'>
						<InputLabel htmlFor='component-outlined'>Password</InputLabel>
						{passwordError ? (
							<OutlinedInput
								id='password'
								className='login-field'
								type='password'
								label='password'
								error
							/>
						) : (
							<OutlinedInput
								id='password'
								className='login-field'
								type='password'
								label='password'
							/>
						)}
						{passwordError && (
							<FormHelperText error id='username-error'>
								Password is incorrect!
							</FormHelperText>
						)}
					</FormControl>
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
						<p>CREATE AN ACCOUNT</p>
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
