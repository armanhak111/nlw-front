import React from 'react';
import './styles.css'
import Logo from '../../assets/images/logo.png'
import { GetQuotePassiveButton } from '../buttons/getquote';
import { useHistory } from 'react-router';

const Header: React.FC = () => {
    const history = useHistory()
    return (
        <div className='headerContainer'>
            <div style={{cursor:'pointer'}} onClick={() => history.push('/')}>
                <img src={Logo} alt='logo' />
            </div>
            <div className='menuItems'>
                <div className='menuItemContainer'>
                    <div className='classicItem'>
                        <p>Profile</p>
                    </div>
                </div>
                <div className='menuItemContainer'>
                    <div onClick={() =>  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className='classicItem'>
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