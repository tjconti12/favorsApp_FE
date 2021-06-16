import axios from 'axios'
import ENDPOINT from '../../config/config'

import * as TaskFormStyles from './TaskForm.module.css'

const Register = () => {
	const url = ENDPOINT + '/users/register'

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className='register-page'>
			<center>
				<h1>Sign Up!</h1>
			</center>
			<form onSubmit={handleSubmit}>
				<center>
					<label htmlFor='profile-pic'>Profile Pic</label>
					<select
						id='profile-pic'
						className={TaskFormStyles.select}
						name='profile-pic'>
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
		</div>
	)
}

export default Register
