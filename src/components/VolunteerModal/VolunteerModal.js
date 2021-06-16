import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import * as VolunteerModalStyles from './VolunteerModal.module.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StoreIcon from '@material-ui/icons/Store';

const VolunteerModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }



    return (
        <div>
            <button type="button" onClick={handleOpen}>Open Modal</button>
            <Modal
                open={open}
                onClose={handleClose}
                >
                <div className={VolunteerModalStyles.modal}>
                    <h2 className={VolunteerModalStyles.modalTitle}>Help Request</h2>
                    <h3 className={VolunteerModalStyles.name}>Sabrina</h3>
                    <p className={VolunteerModalStyles.title}>Buy milk for me please!</p>
                    <div className={VolunteerModalStyles.tealContainer}>
                        <div className={VolunteerModalStyles.time}>
                            <CalendarTodayIcon />
                            6/15/21, 10AM
                        </div>
                        <div className={VolunteerModalStyles.category}>
                            <StoreIcon />
                            SHOPPING
                        </div>
                    </div>
                    <p className={VolunteerModalStyles.description}>If someone is available, can you buy me Itambe natural milk at Safeway?</p>
                    <button type="button" onClick={handleClose} className={VolunteerModalStyles.xButton}>X</button>
                    <div className={VolunteerModalStyles.buttonContainer}>
                        <button type="button" onClick={handleClose} className={VolunteerModalStyles.cancel}>CANCEL</button>
                        <button type="button" onClick={handleClose} className={VolunteerModalStyles.accept}>ACCEPT</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default VolunteerModal
