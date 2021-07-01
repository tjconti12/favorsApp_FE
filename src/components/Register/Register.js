import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import ENDPOINT from '../../config/config'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import './Register.css'

const Register = () => {
	const [redirect, setRedirect] = useState(false)
	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}))

	const classes = useStyles()

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			profileIcon: e.currentTarget.dataset,
			username: e.target.username.value,
			password: e.target.password.value,
		}

		const url = ENDPOINT + '/users/register'

		axios.post(url, data).then((res) => setRedirect(true))
	}

	const profileIcons = [
		{
			id: 1,
			name: 'duck',
			image: 'https://i.imgur.com/qhET4ZS.png',
		},
		{
			id: 2,
			name: 'fox',
			image: 'https://i.imgur.com/I9mE8md.png',
		},
		{
			id: 3,
			name: 'dog',
			image: 'https://i.imgur.com/XtDL5Ku.png',
		},
		{
			id: 4,
			name: 'elephant',
			image: 'https://i.imgur.com/9pVLnkz.png',
		},
		{
			id: 5,
			name: 'giraffe',
			image: 'https://i.imgur.com/Do0e957.png',
		},
		{
			id: 6,
			name: 'lion',
			image: 'https://i.imgur.com/gMZXcAT.png',
		},
		{
			id: 7,
			name: 'cat',
			image: 'https://i.imgur.com/VT1EKbo.png',
		},
		{
			id: 8,
			name: 'owl',
			image: 'https://i.imgur.com/aMVMOhg.png',
		},
	]

	if (redirect) {
		return <Redirect to='/home' />
	}

	return (
		<div className='register-page'>
			<center>
				<h1>Sign Up!</h1>
			</center>
			<form onSubmit={handleSubmit}>
				<center>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor='profileIcon'>Profile Icon</InputLabel>
						<Select id='profileIcon' required>
							{profileIcons.map((pic) => {
								return (
									<MenuItem key={pic.id} data-profile-icon value={pic.image}>
										{pic.name}
									</MenuItem>
								)
							})}
						</Select>
					</FormControl>
				</center>
				<center>
					<FormControl variant='outlined'>
						<InputLabel htmlFor='username'>Username</InputLabel>
						<OutlinedInput
							id='username'
							className='register-field'
							type='text'
							label='username'
						/>
					</FormControl>
				</center>
				<br />
				<center>
					<FormControl variant='outlined'>
						<InputLabel htmlFor='component-outlined'>Password</InputLabel>
						<OutlinedInput
							id='password'
							className='register-field'
							type='password'
							label='password'
						/>
					</FormControl>
				</center>

				<center>
					<br />
					<button id='register' type='submit'>
						SIGN UP!
					</button>
				</center>
			</form>
		</div>
	)
}

export default Register
