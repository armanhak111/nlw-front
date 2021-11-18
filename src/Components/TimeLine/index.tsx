import React from 'react';
import './styles.css'


export const Timeline: React.FC = () => {
    return (
        <div className="bg-gradient_solid">
            <div className="container">
                <div className="steps">
                    <div className="steps-container">
                        <div className="content">
                            <h2 className='flexEnd'>Your problem</h2>
                            <p className='firstT'>
                                Having trouble losing weight? Can't get your dream body?
                                Hate the reflection in the mirror? Can't wear your favorite clothes?
                                Don't have enough time in a day to lose weight?
                            </p>
                        </div>
                        <div className="date"></div>
                    </div>
                    <div className="steps-container">
                        <div className="content">
                            <h2>Our solution</h2>
                            <p className='secondT'>
                                Never mind, after spending just seven days, you will see excellent and fabulous results, after spending a month,
                                you will achieve your dreams. Without spending a lot of money on nutritionists,dietitians, gyms, you will get the
                                desired outcome. This is the most affordable and accessible solution to your problem.
                            </p>
                        </div>
                        <div className="date"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}