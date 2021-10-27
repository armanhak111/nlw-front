import React from 'react';
import DietPlanImage from '../../assets/images/dietPlan.png'
import { GetQuoteActiveButton } from '../buttons/getquote';
import './styles.css'


const DiscoverNewMethod: React.FC = () => {
    return (
        <div className='discoverNewMethodContainer'>
            <div className='newMethodTextAndGet'>
                <div className='newMethodHeader'>
                    Discover a new method of fast weight loss
                </div>
                <div className='newMethodText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida metus massa cursus mauris amet, enim, ut aliquet. Vitae pretium purus fermentum quam facilisi netus scelerisque augue.
                </div>
                <div className='newMethodButton'>
                    <GetQuoteActiveButton />
                </div>
            </div>
            <div>
                <img className='dietPlanImg' src={DietPlanImage} alt='dietPlan' />
            </div>
        </div>
    )
};


export default DiscoverNewMethod;