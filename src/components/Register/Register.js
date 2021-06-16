import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import ENDPOINT from '../../config/config'

const Register = () => {
	const [redirect, setRedirect] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			profileIcon: e.target.profile.value,
			username: e.target.username.value,
			password: e.target.password.value,
		}

		const url = ENDPOINT + '/users/register'

		axios.post(url, data).then((res) => setRedirect(true))
	}

	if (redirect) {
		return <Redirect to='/' />
	}

	return (
		<div className='register-page'>
			<center>
				<h1>Sign Up!</h1>
			</center>
			<form onSubmit={handleSubmit}>
				<center>
					<label htmlFor='profile-icon'>Profile Icon</label>
					<select id='profile' name='profile-icon'>
						<option value='sample1'>Sample1</option>
						<option value='sample2'>Sample2</option>
						<option value='sample3'>Sample3</option>
					</select>
				</center>
				<center>
					<label htmlFor='username'>Username:</label>
					<input id='username' className='register-field' type='text' />
				</center>
				<br />
				<center>
					<label htmlFor='password'>Password:</label>
					<input id='password' className='register-field' type='password' />
				</center>
				<center>
					<br />
					<button type='submit'>Register</button>
				</center>
			</form>
			<Link to='/'>
				<button>Log In</button>
			</Link>
		</div>
	)
}

export default Register
