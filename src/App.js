import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import HomePage from './components/HomePage/HomePage'
import TaskForm from './components/TaskForm/TaskForm'
import Category from './components/CategoryPage/Category'
import Footer from './components/Footer/Footer'
import VolunteerModal from './components/VolunteerModal/VolunteerModal'
import Profile from './components/Profile/Profile'
import Schedule from './components/Schedule/Schedule'

function App() {
	const [loggedIn, setLoggedIn] = useState(false)
	const [addModalOpen, setAddModalOpen] = useState(false)

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/home'>
					<HomePage loggedIn={loggedIn} setAddModalOpen={setAddModalOpen} />
				</Route>
				<Route exact path='/'>
					<Login setLoggedIn={setLoggedIn} />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route exact path='/shopping'>
					<Category loggedIn={loggedIn} category='shopping' />
				</Route>
				<Route exact path='/caretaking'>
					<Category loggedIn={loggedIn} category='caretaking' />
				</Route>
				<Route exact path='/cleaning'>
					<Category loggedIn={loggedIn} category='cleaning' />
				</Route>
				<Route exact path='/transportation'>
					<Category loggedIn={loggedIn} category='transportation' />
				</Route>
				<Route exact path='/profile'>
					<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path='/schedule'>
					<Schedule loggedIn={loggedIn} />
				</Route>
				{/* <Route exact path="/details">
          <Details />
        </Route> */}
			</Switch>
			<Footer setAddModalOpen={setAddModalOpen} />
			{addModalOpen ? (
				<TaskForm loggedIn={loggedIn} setAddModalOpen={setAddModalOpen} />
			) : (
				<></>
			)}
		</div>
	)
}

export default App
