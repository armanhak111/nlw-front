import React from 'react';
import Footer from '../../Components/footer';
import Header from '../../Components/header';
import Diet from '../../Components/Diet'
import DietPlans from '../../Components/DietPlans';
import { GetNext } from '../../Components/buttons/getquote';
import DownloadIcon from '../../assets/icons/downloadIcon.png'
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
                    <div className="weekAndStartWeightContainer">
                        <div className="weekCurrent">
                            <span>1 Week</span>
                        </div>
                        <div className="startWeight">
                            <span>Start Weight:
                                <span>
                                    100kg
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='dietAndDietPlan'>
                        <Diet />
                        <DietPlans />
                    </div>
                    <div className="downloadGetNextContainer">
                        <div className="download">
                            <div className="donwloadIcon">
                                <img src={DownloadIcon} alt='DownloadIcon' />
                            </div>
                            <div className="downloadText">
                                Download
                            </div>
                        </div>
                        <div className="getNextDown">
                            <GetNext />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};


export default UserPage;