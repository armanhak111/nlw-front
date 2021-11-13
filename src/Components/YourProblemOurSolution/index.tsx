import React from 'react';
import './styles.css'


const YourProblemOurSolution: React.FC = () => {
    return (
        <div className='problemSolutionContainer'>
            <div className='problemMain'>
                <div className='problem'>
                    <div className='problemSolutionHeader'>Your problem</div>
                    <div className='problemSolutionText'>
                        Having trouble losing weight? Can't get your dream body?
                        Hate the reflection in the mirror? Can't wear your favorite clothes?
                        Don't have enough time in a day to lose weight?
                    </div>
                    <div className='problemSolutionSteps'>
                <span className='step1' />
                <span className='step2' />
            </div>
                </div>
            </div>
            <div className='solutionMain'>
                <div className='solution'>
                    <div className='problemSolutionHeader'>Our solution</div>
                    <div className='problemSolutionText'>
                        Never mind, after spending just seven days, you will see excellent and fabulous results, after spending a month,
                        you will achieve your dreams. Without spending a lot of money on nutritionists,dietitians, gyms, you will get the
                        desired outcome. This is the most affordable and accessible solution to your problem.
                    </div>
                </div>
            </div>

        </div>
    )
}


export default YourProblemOurSolution;