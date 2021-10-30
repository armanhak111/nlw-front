import React from 'react';
import './styles.css'


const YourProblemOurSolution: React.FC = () => {
    return (
        <div className='problemSolutionContainer'>
            <div className='problemMain'>
                <div className='problem'>
                    <div className='problemSolutionHeader'>Your problem</div>
                    <div className='problemSolutionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse morbi est lectus arcu sollicitudin rhoncus, sit scelerisque aliquet. Convallis pharetra malesuada erat tortor. Aliquet pulvinar scelerisque aliquam aliquam tempus.</div>
                </div>
            </div>
            <div className='solutionMain'>
                <div className='solution'>
                    <div className='problemSolutionHeader'>Our solution</div>
                    <div className='problemSolutionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse morbi est lectus arcu sollicitudin rhoncus, sit scelerisque aliquet. Convallis pharetra malesuada erat tortor. Aliquet pulvinar scelerisque aliquam aliquam tempus.</div>
                </div>
            </div>
            <div className='problemSolutionSteps'>
                <span className='step1'/>
                <span className='step2'/>
            </div>
        </div>
    )
}


export default YourProblemOurSolution;