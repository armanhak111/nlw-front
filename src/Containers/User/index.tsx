import React from 'react';
import Footer from '../../Components/footer';
import Header from '../../Components/header';
import Diet from '../../Components/Diet'
import DietPlans from '../../Components/DietPlans';

import './styles.css'


const UserPage: React.FC = () => {
    const currentDietId: string = JSON.parse(String(localStorage.getItem("USER")))
    return (
        <>
            <Header />
            <div className='d-flex'>
                <div className="userContainer">
                    <div className="userProfileHeader">
                        Profile
                    </div>
                    <div className="currentDietId">
                        Diet ID : {currentDietId}
                    </div>
                    <div className='dietAndDietPlan'>
                        <Diet />
                        <DietPlans />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};


export default UserPage;