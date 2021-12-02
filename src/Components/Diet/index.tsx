import React from 'react';
import { DAYS } from '../../Utils/constants';
import { FIRST_DIET, FIRST_DIET_INFO } from './diets';
import './styles.css'


const Diet: React.FC = () => {
    return (
        <div className="dietContainer">
            <div className="page">
                <div className="timeline__cards">
                    <div className="timeline__card card customazations">
                        <div className="card__content">
                            <p>
                             A -  {FIRST_DIET_INFO.a}
                            </p>
                        </div>
                        <div className="card__content">
                            <p>
                             B -   {FIRST_DIET_INFO.b}
                            </p>
                        </div>
                        <div className="card__content">
                            <p>
                             C -   {FIRST_DIET_INFO.c}
                            </p>
                        </div>
                    </div>
                </div>

                {DAYS.map((element: number) => {
                    return (
                        <div className="timeline">
                            <div className="timeline__group">
                                <span className="timeline__year time" aria-hidden="true">
                                    {element}
                                </span>
                                <div className="timeline__cards">
                                    <div className="timeline__card card">
                                        <header className="card__header">
                                            <time className="time" dateTime="2008-02-02">
                                                <span className="time__month">
                                                    {FIRST_DIET[element - 1].day}
                                                </span>
                                            </time>
                                        </header>
                                        <div className="card__content">
                                            <p>
                                                {FIRST_DIET[element - 1].desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};


export default Diet;