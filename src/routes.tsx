import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import GetQuote from './Containers/GetQuote';
import MainPage from './Containers/LandingPage';
import { ModalCreator } from './Containers/ModalCreator';
import ProfileIDPage from './Containers/ProfileIDPage';
import { SystemAdministrator } from './Containers/SystemAdministrator';
import UserPage from './Containers/User';
import { adminAccessSelector, GetNextModalOpanStatus, modalOpenSelector } from './store/selector';
import { ROUTES } from './Utils/constants';

export const Routes: React.FC = () => {
    const adminAccess = useSelector(adminAccessSelector)
    const getNexModalOpen = useSelector(GetNextModalOpanStatus)
    const modalOpen = useSelector(modalOpenSelector)

    return (
        <div>
            <ModalCreator type='success'/>
            <div style={{filter: `${(getNexModalOpen || modalOpen.status) ? 'blur(8px)' : 'none'}`}}>
            <Switch>
                <Route exact path={ROUTES.home} component={MainPage} />
                <Route exact path={ROUTES.getQuote} component={GetQuote} />
                <Route exact path={ROUTES.profile} component={ProfileIDPage} />
                <Route path={ROUTES.admin} component={SystemAdministrator}>
                    {!adminAccess && <Redirect to='/' />}
                </Route>
                <Route exact path={`${ROUTES.user}/:dietId`} component={UserPage} />
            </Switch>
            </div>
        </div>
    )
}