import React from 'react';
import './styles.css'
import Logo from '../../assets/images/logo.png'
import { GetQuoteButton } from '../buttons/getquote';

const Header: React.FC = () => {
    return (
        <div className='headerContainer'>
            <div>
                <img src={Logo} alt='logo' />
            </div>
            <div className='menuItems'>
                <div className='menuItemContainer'>
                    <div className='classicItem'>
                        Profile
                    </div>
                </div>
                <div className='menuItemContainer'>
                    <div className='classicItem'>
                        Contact Us
                    </div>
                </div>
                <div className='menuItemContainer'>
                    <div className='getQuoteContainer'>
                        <GetQuoteButton />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header