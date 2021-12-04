import React from 'react';
import { useDispatch } from 'react-redux';
import { setGetNextModalStatus } from '../../store/slice';
import { OPACITIES } from '../../Utils/constants';
import './styles.css'

interface IProps {
    currentWeek: number
    currentUser: any
}

export const AwaitingDiet:React.FC<IProps> = ({currentWeek, currentUser}) => {
    const dispatch = useDispatch()
    const getNext = () => {
        dispatch(setGetNextModalStatus(true))

    }
    const currentWeekOpacity = currentUser?.diets ?  currentWeek - 1 - currentUser?.diets.length : 0
    return (
        <div className="awaitingDietContainer" style={{opacity : `${OPACITIES[currentWeekOpacity]}`}}>
            <div className="awaitingCurrentWeek">
                {currentWeek} Week
            </div>
            <div className="getDietIcon" style={{pointerEvents: Number(OPACITIES[currentWeekOpacity]) < 1 ? 'none' : 'initial' }} onClick={getNext}>
                Get
            </div>
        </div>
    )
};