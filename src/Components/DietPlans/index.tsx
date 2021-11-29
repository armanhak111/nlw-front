import React from 'react'
import { filteredNumber, totalLose } from '../../Utils/constants';
import { AwaitingDiet } from './AwaitingDiet';
import { PaidDiet } from './PaidDiets';
import './styles.css'


const DietPlans: React.FC<{ currentUser: any }> = ({ currentUser }) => {
    const dietList = [1, 2, 3, 4]
    return (
        <div className="dietPlansContainer">
            <div className="dietPlansHeader">
                Diet Plans
            </div>
            <div className="currentDietPlanContainer">
                {dietList.map((el: number, index) => {
                    if (currentUser && currentUser.diets[index]) {
                        return (
                            <>
                                {index > 0 && (
                                    <div className='disclaimor'>
                                        {filteredNumber(currentUser, index)}
                                    </div>
                                )}
                                <PaidDiet currentUser={currentUser.weight[index]} currentWeek={index + 1} />
                            </>
                        )
                    } else {
                        return (
                            <AwaitingDiet currentUser={currentUser} currentWeek={index + 1} />
                        )
                    }
                })}
            </div>
            {currentUser?.weight && currentUser?.weight.length > 1 &&
                (
                    <div className='maxLosed'>
                        Total Losed: {totalLose(currentUser)}
                    </div>
                )}
        </div>
    )
};

export default DietPlans;