import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import ENDPOINT from '../../config/config'

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
			.then((res) => localStorage.setItem('user', res.data))
			.then(() => setRedirect(true))
	}

	if (redirect) {
		return <Redirect to={`/add`} />
	}

	return (
		<div className='login-page'>
			<center>
				<h1>Login to Profile</h1>
			</center>
			<form onSubmit={handleSubmit}>
				<center>
					<label htmlFor='username'>Username:</label>
					<input id='username' className='login-field' type='text' />
				</center>
				<br />
				<center>
					<label htmlFor='password'>Password:</label>
					<input id='password' className='login-field' type='password' />
				</center>
				<center>
					<br />
					<button type='submit'>Login</button>
				</center>
			</form>
			<Link to='/register'>
				<button>Sign Up!</button>
			</Link>
		</div>
	)
}

export default Login
