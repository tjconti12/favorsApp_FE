import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as TaskFormStyles from './TaskForm.module.css';

const TaskForm = () => {
    const [type, setType] = useState('shopping');
    const [date, setDate] = useState("2021-06-15T10:30");
    const [details, setDetails] = useState('');

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`type: ${type}, date: ${date}, details: ${details}`)
        history.push('/')
    }

    return (
        <div>
            <h2 className={TaskFormStyles.title}>Add Event</h2>
            <form className={TaskFormStyles.form} onSubmit={handleSubmit}>
                <div className={TaskFormStyles.type}>
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} className={TaskFormStyles.select} onChange={(e) => setType(e.target.value)}>
                        <option value="shopping">Shopping</option>
                        <option value="caretaking">Caretaking</option>
                        <option value="cleaning">Cleaning</option>
                    </select>
                </div>
                <div className={TaskFormStyles.date}>
                    <label htmlFor="datetime-local">Date Due</label>
                    <input
                        id="datetime-local"
                        type="datetime-local"
                        className={TaskFormStyles.datePicker}
                        value={date} 
                        onChange={(e)=> setDate(e.target.value)}
                    />
                </div>
                <div className={TaskFormStyles.details}>
                    <label htmlFor="details">Details</label>
                    <textarea id="details" name="details" className={TaskFormStyles.textBox} value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default TaskForm
