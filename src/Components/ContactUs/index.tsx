import React, { useState } from 'react';
import './styles.css'
import TextField from '@mui/material/TextField';
import { GetQuoteActiveButton } from '../buttons/getquote';
import { EMAIl } from '../../Utils/validations';
import { contactUsAction } from '../../store/slice';

const defaultFields = {
    name: '',
    email: '',
    message: ''
}

const ContactUs: React.FC = () => {
    const [contacts, setContacts] = useState<{name?:string,email?:string,message?:string}>(defaultFields);
    const [error, setError] = useState<boolean>(false);
    const handleChange = (e:any) => {
        setContacts({
            ...contacts,
            [e.target.name]: e.target.value
        })
    };

    const contactUs = () => {
        const validEmail = EMAIl.test(String(contacts?.email).toLowerCase());
        if(validEmail){
            contactUsAction(contacts)
            console.log(validEmail);       
            setContacts(defaultFields) 
            setError(false)
        }else{
            setError(true)
        }
    }
    return (
        <div className="contactUsMainContainer">
            <div className="contactUs">
                <div className="contacUsHeader">
                    Contact Us
                </div>
                <div className="form">
                    <div className="credentials">
                        <div className='field'>
                            <TextField
                                label="Name"
                                variant="standard"
                                onChange={handleChange}
                                className='textCustomField'
                                color="warning"
                                value={contacts.name}
                                name='name'
                                focused
                            />
                        </div>
                        <div className='field'>
                            <TextField
                                label="Email"
                                onChange={handleChange}
                                variant="standard"
                                className='textCustomField'
                                value={contacts.email}
                                color="warning"
                                name='email'
                                focused
                            />
                        </div>
                        {error && <div style={{color: 'rgba(231, 85, 120, 1)'}} className='emailMessage'>Please enter a valid Email</div>}
                    </div>
                    <div className="message">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Message"
                            multiline
                            onChange={handleChange}
                            value={contacts.message}
                            name='message'
                            className='messageCustomField'
                            maxRows={6}
                        />
                    </div>
                </div>
                <div className="contatUsSubmit" onClick={contactUs}>
                    <GetQuoteActiveButton text={'Contact Us'} />
                </div>
            </div>
        </div>
    )
};


export default ContactUs;