import React from 'react';
import './styles.css';

const Footer: React.FC = () => {
    return (
        <div className="containerFooter">
            <div className='footer'>
                <div className='policy'>
                    <div>Privacy Policy</div>
                    <div>Term of Use</div>
                </div>
                <div className='sertificate'>Precision Nutrition Level 1 Certification</div>
            </div>
        </div>
    )
};


export default Footer;