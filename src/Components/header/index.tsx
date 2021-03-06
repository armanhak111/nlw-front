import React from 'react';
import './styles.css'
import Logo from '../../assets/images/logo.png'
import { GetQuotePassiveButton } from '../buttons/getquote';
import { useHistory, useLocation } from 'react-router';
import { ROUTES } from '../../Utils/constants';
import { setContactUsBackRoute } from '../../store/slice';
import { useDispatch } from 'react-redux';
import { BurgerMenu } from './burgerMenu';

const Header: React.FC = () => {
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const contactUs = () => {
        if(location.pathname !== ROUTES.home){
            dispatch(setContactUsBackRoute(true))
            history.push('/')
        }else{
            console.log(document.body.scrollHeight)
            window.scrollTo({ top: document.body.scrollHeight - document.body.scrollHeight / 3, behavior: 'smooth' })
        }
    }
    return (
        <div className='headerContainer'>
            <div style={{cursor:'pointer'}} onClick={() => history.push('/')}>
                <img src={Logo} alt='logo' />
            </div>
            <div className="buregerMain">
                    <BurgerMenu />
                </div>
            <div className='menuItems'>
                <div onClick={() => history.push('/profile')} className='menuItemContainer top'>
                    <div className='classicItem'>
                        <p>Profile</p>
                    </div>
                </div>
                <div className='menuItemContainer top'>
                    <div onClick={contactUs} className='classicItem'>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='menuItemContainer'>
                    <div onClick={() => history.push('/getquote')} className='getQuoteContainer'>
                        <GetQuotePassiveButton />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header