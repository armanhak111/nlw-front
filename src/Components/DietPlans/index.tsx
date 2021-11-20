import React from 'react'
import { AwaitingDiet } from './AwaitingDiet';
import { PaidDiet } from './PaidDiets';
import './styles.css'

const fakeDietData = [
    {
        paid: true
    },
    {
        paid: false
    },
    {
        paid: false
    },
    {
        paid: false
    },
]

const DietPlans: React.FC<{currentUser:any}> = ({currentUser}) => {
    return (
        <div className="dietPlansContainer">
            <div className="dietPlansHeader">
                Diet Plans
            </div>
            <div className="currentDietPlanContainer">
                {fakeDietData.map((el:any, index) => {
                    if(el.paid){
                        return (
                            <PaidDiet currentUser={currentUser} currentWeek={index + 1} />
                        )
                    }else{
                        return (
                            <AwaitingDiet currentWeek={index + 1} />
                        )
                    }
                })}
            </div>
        </div>
    )
};

export default DietPlans;