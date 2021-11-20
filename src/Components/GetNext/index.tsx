import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUser, GetNextModalOpanStatus } from '../../store/selector';
import { setGetNextModalStatus } from '../../store/slice';
import { GetNext } from '../buttons/getquote';
import './styles.css'


const GetNextModal: React.FC = () => {
    const getNexModalOpen = useSelector(GetNextModalOpanStatus)
    const currentUser = useSelector(CurrentUser)
    const [currentUserCredetials, setCurrentUserCredentials] = useState<any>()
    const [lose, setLose] = useState<any>()
    const [weight, setWeight] = useState<any>()
    const [error, setError] = useState<boolean>(false)
    console.log(currentUser)
    useEffect(() => {
        if(currentUser){
            setCurrentUserCredentials({
                id: currentUser.dietId,
                weight: Number(currentUser.weight.split(" ")[0]),
                weightPoint: currentUser.weight.split(" ")[1]
            })
        }
    }, [])
    const dispatch = useDispatch()
    const toggleModal = () => {
        dispatch(setGetNextModalStatus(false))
    }

    useEffect(() => {
        if (weight) {
            setLose(currentUserCredetials.weight - weight)
        }
    }, [weight])


    const getNextDiet = () => {
        if (!weight || String(weight).length < 2) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <Modal
            isOpen={getNexModalOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="mymodal"
            ariaHideApp={false}
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
        >
            <div className="getNextModalContainer">
                <div className="getNextModalHeader">
                    Get Next
                </div>
                <div className="weekAndStartWeighy">
                    <div className="currentModalWeek">
                        1 Week
                    </div>
                    <div className="startWeightModl">
                        Start Weight: <span>{currentUserCredetials?.weight} {currentUserCredetials?.weightPoint}</span>
                    </div>
                </div>
                <div className="d-flex">
                    <div className='kgelbcontainer modalKgPicker'>
                        <TextField
                            label="Weight ( KG or LBS )"
                            variant="standard"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
                            value={weight}
                            className='textCustomField'
                            type="number"
                            color="warning"
                            name='weight'
                            focused
                        />
                        <span className='kgelbchanger modalWeightChangerCurrent'>
                            <div className='kgActive'>
                            {currentUserCredetials?.weightPoint}
                            </div>
                        </span>
                    </div>
                </div>
                {error &&
                    (
                        <div className="modalErrorMessage">
                            Please fill in your weight for now
                        </div>
                    )}
                {typeof lose === 'number' && String(weight).length > 1 &&
                    (
                        <div className="howYouLose">
                            You Lose: <span>{lose} {currentUserCredetials?.weightPoint}</span>
                        </div>
                    )}
                <div onClick={getNextDiet} className="getNextModalButton d-flex">
                    <GetNext />
                </div>
            </div>
        </Modal>
    )
};

export default GetNextModal;