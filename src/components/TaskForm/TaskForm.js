import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ENDPOINT from '../../config/config'

import * as TaskFormStyles from './TaskForm.module.css'

const TaskForm = () => {
	// const [type, setType] = useState('shopping')
	// const [date, setDate] = useState('2021-06-15T10:30')
	// const [details, setDetails] = useState('')
	const [tasks, setTasks] = useState([])

	let history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			type: e.target.type.value,
			title: e.target.title.value,
			description: e.target.description.value,
			dueDate: e.target.dueDate.value,
		}

		const url = ENDPOINT + '/tasks'

		axios.post(url, data).then((res) => setTasks([...tasks, res.data]))
		// .then((res) => history.push(`/${tasks.type}`))
	}

	return (
		<div>
			<h2 className={TaskFormStyles.title}>Add Event</h2>
			<form className={TaskFormStyles.form} onSubmit={handleSubmit}>
				<div className={TaskFormStyles.type}>
					<label htmlFor='type'>Type</label>
					<select
						name='type'
						id='type'
						defaultValue={'shopping'}
						className={TaskFormStyles.select}>
						<option value='shopping'>Shopping</option>
						<option value='caretaking'>Caretaking</option>
						<option value='cleaning'>Cleaning</option>
					</select>
				</div>
				<div className={TaskFormStyles.title}>
					<label htmlFor='title'>Title</label>
					<input id='title' type='text' required />
				</div>
				<div className={TaskFormStyles.date}>
					<label htmlFor='dueDate'>Date Due</label>
					<input
						id='dueDate'
						type='datetime-local'
						className={TaskFormStyles.datePicker}
						defaultValue={'2021-06-15T10:30'}
					/>
				</div>
				<div className={TaskFormStyles.details}>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						name='description'
						className={TaskFormStyles.textBox}></textarea>
				</div>
				<input type='submit' />
			</form>
		</div>
	)
}

export default TaskForm
