import React from 'react';
import { OPACITIES } from '../../Utils/constants';
import './styles.css'

interface IProps {
    currentWeek: number
}

export const AwaitingDiet:React.FC<IProps> = ({currentWeek}) => {
    return (
        <div className="awaitingDietContainer" style={{opacity : `${OPACITIES[currentWeek - 1]}`}}>
            <div className="awaitingCurrentWeek">
                {currentWeek} Week
            </div>
            <div className="getDietIcon">
                Get
            </div>
        </div>
    )
};