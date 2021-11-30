import React from 'react';
import './styles.css'



const AboutPayment:React.FC = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}} className="aboutPaymentContainer">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="aboutPayment">
                We accept only cryptocurrency method of payment
            </div>
        </div>
    )
};


export default AboutPayment;