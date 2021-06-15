import { Link } from 'react-router-dom';
import * as HomePageStyles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={HomePageStyles.container}>
            <Link to="/shopping" className={HomePageStyles.link}>
                <div className={HomePageStyles.shopping}><span>Shopping</span></div>
            </Link>
            <Link to="/caretaking" className={HomePageStyles.link}>
                <div className={HomePageStyles.caretaking}><span>Caretaking</span></div>
            </Link>
            <Link to="/cleaning" className={HomePageStyles.link}>
                <div className={HomePageStyles.cleaning}><span>Cleaning</span></div>
            </Link>
        </div>
    )
}

export default HomePage