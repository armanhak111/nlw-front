import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CurrentUser } from '../../store/selector';
import { setModalOpenAction } from '../../store/slice';
import SuccessIcon from './../../assets/icons/success.png'
import './styles.css'

interface PropTpyesInfo {
    childrenInfo: string
}

export const ErrorModalComponent: React.FC = () => {
    return (
        <div>error</div>
    )
}

export const SuccessModalComponent: React.FC = () => {
    const history = useHistory()
    const dispacth = useDispatch()
    const goTo = (route:string) => {
        dispacth(setModalOpenAction({}))
        setTimeout(() => {
            history.push(route)
        },700)
    } 
    return (
        <div className='modalContainer'>
            <div className='success'>
                <img src={SuccessIcon} alt='success' />
            </div>
            <div className='generateUniquieIdText'>
                We generate a unique Diet ID for you
            </div>
            <div className='afterPaymentShowDietText'>
            After payment  you will be able to see your diet
            </div>
            <div className='checkYourEmailText'>
                Please check your Email!
            </div>
            <div className='succesModalButtonContainer'>
                <div className='secondaryButton' onClick={() => goTo('/')}>
                    Home Page
                </div>
                <div className='primaryButton' onClick={() => goTo('/profile')}>
                    Profile
                </div>
            </div>
        </div>
    )
}

export const SuccessGetNextModal: React.FC = () => {
    const currentUser = useSelector(CurrentUser)
    const history = useHistory()
    const dispacth = useDispatch()
    const goTo = (route:string) => {
        dispacth(setModalOpenAction({}))
        setTimeout(() => {
            history.push(route)
        },700)
    } 
    return (
        <div className='modalContainer'>
            <div className='success'>
                <img src={SuccessIcon} alt='success' />
            </div>
            <div className='generateUniquieIdText'>
                {currentUser.name} - {currentUser.dietId}
            </div>
            
            <div className='afterPaymentShowDietText'>
            After payment  you will be able to see your diet
            </div>
            <div className='checkYourEmailText'>
            Check your Email!
            </div>
            <div className='succesModalButtonContainer'>
                <div className='secondaryButton' onClick={() => goTo('/')}>
                    Home Page
                </div>
                <div className='primaryButton' onClick={() => goTo('/profile')}>
                    Profile
                </div>
            </div>
        </div>
    )
}

export const InfoModalComponent: React.FC<PropTpyesInfo> = ({ childrenInfo }) => {
    const dispatch = useDispatch()
    return (
        <div className='infoModal'>
            <div>
                {childrenInfo}
            </div>
            <div className='ok' onClick={() => dispatch(setModalOpenAction({}))}>
                OK
            </div>
        </div>
    )
}