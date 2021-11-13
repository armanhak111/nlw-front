import React from 'react';
import AboutPayment from '../../Components/AboutPayment';
import ContactUs from '../../Components/ContactUs';
import DiscoverNewMethod from '../../Components/DiscoverNewMethod';
import Header from '../../Components/header';
import WeGiveAGuarantee from '../../Components/WeGiveAGuarantee';
import YourProblemOurSolution from '../../Components/YourProblemOurSolution';
import Footer from '../../Components/footer/index'

const MainPage: React.FC = () => {
    return (
        <div>
            <Header />
            <DiscoverNewMethod />
            <YourProblemOurSolution />
            <WeGiveAGuarantee />
            <ContactUs />
            <AboutPayment />
            <Footer/>
        </div>
    )
}

export default MainPage;