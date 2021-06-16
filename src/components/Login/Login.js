import axios from 'axios'
import ENDPOINT from '../../config/config'

const Login = () => {
	const url = ENDPOINT + '/users/login'

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
		}

		axios.post(url, data).then((res) => console.log('axios', res.data))
		// .then((res) => setTasks([...tasks, res.data]))
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
		</div>
	)
}

export default Login
