import React from 'react';
import PaidIcon from  '../../assets/icons/success.png'
import './styles.css'

interface IProps {
    currentWeek?: number
    currentUser: any
}

export const PaidDiet:React.FC<IProps> = ({currentWeek = 1, currentUser }) => {
    return (
        <div className='PaidDietConatiner' style={{marginTop: `${currentWeek > 1 ? '0px' : '24px'}` }}>
            <div className="weekAndStartWeight">
                <div className="currentWeekPaid">
                    {currentWeek} Week
                </div>
                <div className="weightStart">
                    Start Weight:    <span>{currentUser}</span>
                </div>
            </div>
            <div className="paid">
                <img className='paidIcon' src={PaidIcon} alt="PaidIcon" />
            </div>
        </div>
    )
};