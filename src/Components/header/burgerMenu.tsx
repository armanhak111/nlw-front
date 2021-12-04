import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { setContactUsBackRoute } from '../../store/slice';
import { ROUTES } from '../../Utils/constants';
import { GetQuoteActiveButton } from '../buttons/getquote';
import './styles.css'

export const BurgerMenu: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const location = useLocation()
    const [openSideBar, setOpenSideBar] = useState<boolean>(false)
    useEffect(() => () => {
        return document.body.style.overflow = 'auto' as any

    }, [])
    
    const toggle = () => {
        document.body.style.overflow = !openSideBar ? 'hidden' : 'auto'
        setOpenSideBar(!openSideBar)
    }
    const contacUs = () => {
        const togle = document.getElementById("menu__toggle")
        togle?.click()
        setTimeout(() => {
            if (location.pathname !== ROUTES.home) {
                dispatch(setContactUsBackRoute(true))
                history.push('/')
            } else {
                window.scrollTo({ top: document.body.scrollHeight - document.body.scrollHeight / 4, behavior: 'smooth' })
            }
        }, 200)
    }
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" onChange={toggle} />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className="menu__box">
                <li onClick={contacUs} className="menu__item current">
                    <span>
                        Contact Us
                    </span>
                </li>
                <li onClick={() => history.push('/profile')} className="menu__item current">
                    <span>
                        Profile
                    </span>
                </li>
                <li onClick={() => history.push('/getquote')} className='burgerMenuGetActive'>
                    <GetQuoteActiveButton />
                </li>
            </ul>
        </div>
    )
}