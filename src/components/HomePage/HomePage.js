import { Link, Redirect } from 'react-router-dom'
import * as HomePageStyles from './HomePage.module.css'
import AddIcon from '@material-ui/icons/Add'
import StoreIcon from '@material-ui/icons/Store'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly'
import BrushIcon from '@material-ui/icons/Brush'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'

const HomePage = ({ setAddModalOpen, loggedIn }) => {
	if (!loggedIn) return <Redirect to='/' />

	return (
		<div className={HomePageStyles.container}>
			<Link to='/schedule' className={HomePageStyles.link}>
				<div className={HomePageStyles.task}>
					<span>MY SCHEDULE</span>
				</div>
			</Link>
			<div>
				<h2 className={HomePageStyles.h2}>Ask for help</h2>
				<div
					className={HomePageStyles.link}
					onClick={() => setAddModalOpen(true)}>
					<div className={HomePageStyles.teal}>
						<AddIcon />
						<span>ADD A TASK</span>
					</div>
				</div>
			</div>
			<div>
				<h2 className={HomePageStyles.h2}>Offer help</h2>
				<Link to='/shopping' className={HomePageStyles.link}>
					<div className={HomePageStyles.task}>
						<span>SHOPPING</span>
						<StoreIcon />
					</div>
				</Link>
				<Link to='/caretaking' className={HomePageStyles.link}>
					<div className={HomePageStyles.task}>
						<span>CARETAKING</span>
						<ChildFriendlyIcon />
					</div>
				</Link>
				<Link to='/cleaning' className={HomePageStyles.link}>
					<div className={HomePageStyles.task}>
						<span>CLEANING</span>
						<BrushIcon />
					</div>
				</Link>
				<Link to='/transportation' className={HomePageStyles.link}>
					<div className={HomePageStyles.task}>
						<span>TRANSPORTATION</span>
						<DirectionsCarIcon />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default HomePage
