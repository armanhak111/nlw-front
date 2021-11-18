import React from 'react';
import { DAYS } from '../../Utils/constants';
import './styles.css'


const Diet: React.FC = () => {
    return (
        <div className="dietContainer">
            <div className='dietMain'>
                <div className='currentDayContainer'>
                    {DAYS.map((el, index: number) => <div key={index} className="currentDay">Day {el}</div>)}
                </div>
                <div className='currentCircle'>
                    {DAYS.map((el, index: number) => <div key={index} className="circle" />)}
                </div>
                <div>
                    {DAYS.map((el) => {
                        return (
                            <div className="dietPlanContainer">
                                <div className="currentTimeToEat">Breakfast</div>
                                <div className="currentMeal">Lorem ipsum dolor sit amet, </div>
                                <div className="currentTimeToEat">Lunch</div>
                                <div className="currentMeal">Lorem ipsum dolor sit amet, </div>
                                <div className="currentTimeToEat">Dinner</div>
                                <div className="currentMeal">Lorem ipsum dolor sit amet, </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};


export default Diet;