import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
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
    return (
        <div className='modalContainer'>
            <div className='success'>
                <img src={SuccessIcon} alt='success' />
            </div>
            <div className='generateUniquieIdText'>
                We generate a unique Diet ID for you
            </div>
            <div className='afterPaymentShowDietText'>
                After Payment we can show your diet
            </div>
            <div className='checkYourEmailText'>
                Chack your Email!
            </div>
            <div className='succesModalButtonContainer'>
                <div className='secondaryButton' onClick={() => history.push('/home')}>
                    Home Page
                </div>
                <div className='primaryButton' onClick={() => history.push('/profile')}>
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