import React from 'react';
import './styles.css'
import Logo from '../../assets/images/logo.png'
import { GetQuotePassiveButton } from '../buttons/getquote';

const Header: React.FC = () => {
    return (
        <div className='headerContainer'>
            <div>
                <img src={Logo} alt='logo' />
            </div>
            <div className='menuItems'>
                <div className='menuItemContainer'>
                    <div className='classicItem'>
                        <p>Profile</p>
                    </div>
                </div>
                <div className='menuItemContainer'>
                    <div className='classicItem'>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='menuItemContainer'>
                    <div className='getQuoteContainer'>
                        <GetQuotePassiveButton />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header