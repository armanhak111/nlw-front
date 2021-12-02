import React, { useEffect } from 'react';
import Footer from '../../Components/footer';
import Header from '../../Components/header';
import Diet from '../../Components/Diet'
import DietPlans from '../../Components/DietPlans';
import { GetNext } from '../../Components/buttons/getquote';
import DownloadIcon from '../../assets/icons/downloadIcon.png'
import GetNextModal from '../../Components/GetNext'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserRequestAction, setGetNextModalStatus } from '../../store/slice';
import { CurrentUser } from '../../store/selector';
import { useHistory, useParams } from 'react-router';


const UserPage: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(CurrentUser)
    const params: any = useParams()

    useEffect(() => {
        if (!currentUser) {
            dispatch(getCurrentUserRequestAction(params?.dietId, history))
        }
    }, [currentUser, dispatch, history, params?.dietId])

    const openGetNext = () => {
        dispatch(setGetNextModalStatus(true))
    }

    return (
        <>
            <Header />
            <div className='d-flex'>
                <div className="userContainer">
                    <div className="userProfileHeader">
                        Profile
                    </div>
                    <div className="currentDietId">
                        Name : <span>{currentUser?.name}</span>
                    </div>
                    <div className="currentDietId">
                        Diet ID : <span>{currentUser?.dietId}</span>
                    </div>
                    <div className="weekAndStartWeightContainer">
                        <div className="weekCurrent">
                            <span>1 Week</span>
                        </div>
                        <div className="startWeight">
                            <span>Start Weight:
                                <span>
                                    {currentUser?.weight && currentUser?.weight[0]}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='dietAndDietPlan'>
                        <div className='dietWrapper'>
                        <Diet />
                        </div>
                        <div className='dietCurrenetWrapper'>
                        <DietPlans currentUser={currentUser} />
                        </div>
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
                        {currentUser?.diets && currentUser?.diets.length !== 4 &&
                            (
                                <div onClick={openGetNext} className="getNextDown">
                                    <GetNext />
                                </div>
                            )}
                    </div>
                </div>
                <GetNextModal />
            </div>
            <Footer />
        </>
    )
};


export default UserPage;