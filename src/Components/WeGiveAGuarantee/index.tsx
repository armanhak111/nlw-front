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
                        <div className="guaranteeText">
                            You will achieve your dream without even leaving your home, without wasting time and resources, we guarantee
                            you that. Our approach has been approved by numerous doctors and received international certification. Our experts are world-renowned.
                        </div>
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