import React from 'react';
import './styles.css';
import Vitamin from '../../assets/images/vitamin.png'

const WeGiveAGuarantee: React.FC = () => {
    return (
        <div>
            <div className="weGiceAGuaranteeContainer">
                <div className="guaranteeContainer">
                    <div className="guarantee">
                        <div className="headerGuarantee">We Give a Guarantee</div>
                        <div className="guaranteeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse morbi est lectus arcu sollicitudin rhoncus, sit scelerisque aliquet. Convallis pharetra malesuada erat tortor. Aliquet pulvinar scelerisque aliquam aliquam tempus.</div>
                    </div>
                </div>
                <div className="vitaminImage">
                    <img src={Vitamin} alt='vitamin' />
                </div>
            </div>
        </div>
    )
};


export default WeGiveAGuarantee;