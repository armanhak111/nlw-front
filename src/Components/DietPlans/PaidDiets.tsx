import React from 'react';
import PaidIcon from  '../../assets/icons/success.png'
import './styles.css'

interface IProps {
    currentWeek?: number
    currentUser: any
}

export const PaidDiet:React.FC<IProps> = ({currentWeek = 1, currentUser }) => {
    return (
        <div className='PaidDietConatiner'>
            <div className="weekAndStartWeight">
                <div className="currentWeekPaid">
                    {currentWeek} Week
                </div>
                <div className="weightStart">
                    Start Weight:    <span>{currentUser?.weight}</span>
                </div>
            </div>
            <div className="paid">
                <img className='paidIcon' src={PaidIcon} alt="PaidIcon" />
            </div>
        </div>
    )
};