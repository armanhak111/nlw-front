import React, { useEffect, useState } from 'react';
import Footer from '../../Components/footer';
import Header from '../../Components/header';
import TextField from '@mui/material/TextField';
import { GetQuoteActiveButton } from '../../Components/buttons/getquote';
import { UUID } from '../../Utils/validations';
import { useHistory } from 'react-router';
import { cantAccess, ID_INVALID, USER_CANT_FIND } from '../../Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserRequestAction } from '../../store/slice';
import { CurrentUser } from '../../store/selector';
import './styles.css'


const ProfileIDPage: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const currentUser = useSelector(CurrentUser)
    const [dID, setDID] = useState<string>("");
    const [error, setError] = useState<string>('')

    useEffect(() => {
        if(!currentUser && typeof currentUser !== 'boolean'){
            setError(USER_CANT_FIND)
        }
    }, [currentUser])

    useEffect(() => {
        if(typeof currentUser !=='boolean' && (currentUser && Array.isArray(currentUser.diets)) && !currentUser?.diets.length){
            const currentError = cantAccess(currentUser.name)
            setError(currentError)
        }
    }, [currentUser])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDID(e.target.value)
    }
    const handleSubmit = () => {
        if(!UUID.test(dID)){
            setError(ID_INVALID)
        }else{
            setError('')
            dispatch(getCurrentUserRequestAction(dID,history))
        }
    }



    return (
        <>
            <Header />
            <div className='profileCOntainer'>
                <div className='profile'>
                    <div className='d-flex profileIdHeader'>Profile</div>
                    <div className='d-flex findId'>You can find your unique ID on your Email</div>
                    <div className='d-flex dietIdField'>
                        <TextField
                            label="Diet ID"
                            onChange={handleChange}
                            value={dID}
                            variant="standard"
                            className='textCustomField customDietField'
                            color="warning"
                            name='id'
                            focused
                        />
                    </div>
                    <div className='d-flex errorMessageProfile'>
                        {error}
                    </div>
                    <div onClick={handleSubmit} className='d-flex confirmBTN'>
                        <GetQuoteActiveButton text={'Confirm'} />
                    </div>
                    <div className='d-flex clichForAccount'>
                        <span className='noHaveAccount'>
                            <p>
                                If you don’t have Diet ID
                            </p>
                        </span>
                        <span onClick={() => history.push('/getquote')} className='clickHere'>
                            <p>Click Here!</p>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};


export default ProfileIDPage;