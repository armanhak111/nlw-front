import React from 'react';
import { useHistory } from 'react-router';
import DietPlanImage from '../../assets/images/dietPlan.png'
import { GetQuoteActiveButton } from '../buttons/getquote';
import './styles.css'


const DiscoverNewMethod: React.FC = () => {
    const history = useHistory();
    return (
        <div className='discoverNewMethodContainer'>
            <div className='newMethodTextAndGet'>
                <div className='newMethodHeader'>
                    Discover a new method of fast weight loss
                </div>
                <div className='newMethodText'>
                    Together with us you will discover the fastest and easiest way to lose weight.
                    It won't take much of your time and actually won't require a waste of your financial resources.
                    The result will be obvious from the very first week.
                    Join us and get the body of your dreams.
                </div>
                <div onClick={() => history.push('/getquote')} className='newMethodButton'>
                    <GetQuoteActiveButton />
                </div>
            </div>
            <div className='dietPlanImageCOntainer'>
                <img className='dietPlanImg' src={DietPlanImage} alt='dietPlan' />
            </div>
        </div>
    )
};


export default DiscoverNewMethod;