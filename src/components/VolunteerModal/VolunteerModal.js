import Modal from '@material-ui/core/Modal';
import * as VolunteerModalStyles from './VolunteerModal.module.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StoreIcon from '@material-ui/icons/Store';

const VolunteerModal = ({ setModalOpen, selected, category }) => {
   

    return (
        <div>
            {/* <button type="button" onClick={handleOpen}>Open Modal</button> */}
            <Modal
                open={true}
                >
                <div className={VolunteerModalStyles.modal}>
                    <h2 className={VolunteerModalStyles.modalTitle}>Help Request</h2>
                    <h3 className={VolunteerModalStyles.name}>{selected.createdBy}</h3>
                    <p className={VolunteerModalStyles.title}>{selected.title}</p>
                    <div className={VolunteerModalStyles.tealContainer}>
                        <div className={VolunteerModalStyles.time}>
                            <CalendarTodayIcon />
                            {selected.dueDate.split('T')[0]}
                        </div>
                        <div className={VolunteerModalStyles.category}>
                            <StoreIcon />
                            {category}
                        </div>
                    </div>
                    <p className={VolunteerModalStyles.description}>{selected.description}</p>
                    <button type="button" 
                    onClick={() => setModalOpen(false)} 
                    className={VolunteerModalStyles.xButton}>X</button>
                    <div className={VolunteerModalStyles.buttonContainer}>
                        <button type="button" onClick={() => setModalOpen(false)} className={VolunteerModalStyles.cancel}>CANCEL</button>
                        <button type="button" onClick={() => setModalOpen(false)} className={VolunteerModalStyles.accept}>ACCEPT</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default VolunteerModal
