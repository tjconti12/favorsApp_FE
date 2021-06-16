import { Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import HomePage from './components/HomePage/HomePage'
import TaskForm from './components/TaskForm/TaskForm'
import Category from './components/CategoryPage/Category'
import Details from './components/DetailsPage/Details'
import Footer from './components/Footer/Footer'
import VolunteerModal from './components/VolunteerModal/VolunteerModal'

function App() {
	return (
		<div className='App'>
			<h1>Güdeeds</h1>
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route exact path='/add'>
					<TaskForm />
				</Route>
				<Route exact path='/shopping'>
					<Category category='shopping' />
				</Route>
				<Route exact path='/caretaking'>
					<Category category='caretaking' />
				</Route>
				<Route exact path='/details'>
					<Details />
				</Route>
			</Switch>
			<VolunteerModal />
			<Footer />
		</div>
	)
}

export default App
