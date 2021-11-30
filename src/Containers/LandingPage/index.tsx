import React, { useEffect } from 'react';
import AboutPayment from '../../Components/AboutPayment';
import ContactUs from '../../Components/ContactUs';
import DiscoverNewMethod from '../../Components/DiscoverNewMethod';
import Header from '../../Components/header';
import WeGiveAGuarantee from '../../Components/WeGiveAGuarantee';
import Footer from '../../Components/footer/index'
import { Timeline } from '../../Components/TimeLine/index'
import { useSelector } from 'react-redux';
import { ConstacUS } from '../../store/selector';
import { setContactUsBackRoute } from '../../store/slice';

const MainPage: React.FC = () => {
    const contactUs = useSelector(ConstacUS)
    console.log(contactUs)
    useEffect(() => {
        if(contactUs){
            setContactUsBackRoute(false)
            window.scrollTo({ top: document.body.scrollHeight - document.body.scrollHeight / 4, behavior: 'smooth' })
        }
    },[contactUs])

    return (
        <div>
            <Header />
            <DiscoverNewMethod />
            <Timeline />
            <WeGiveAGuarantee />
            <ContactUs />
            <AboutPayment /> 
            <Footer/>
        </div>
    )
}

export default MainPage;