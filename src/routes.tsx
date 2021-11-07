import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import GetQuote from './Containers/GetQuote';
import MainPage from './Containers/LandingPage';
import { ModalCreator } from './Containers/ModalCreator';
import { SystemAdministrator } from './Containers/SystemAdministrator';
import { adminAccessSelector } from './store/selector';
import { ROUTES } from './Utils/constants';

export const Routes: React.FC = () => {
    const adminAccess = useSelector(adminAccessSelector)
    
    return (
        <div>
            <ModalCreator type='success'/>
            <Switch>
                <Route exact path={ROUTES.home} component={MainPage} />
                <Route exact path={ROUTES.getQuote} component={GetQuote} />
                <Route path={ROUTES.admin} component={SystemAdministrator}>
                    {!adminAccess && <Redirect to='/' />}
                </Route>
            </Switch>
        </div>
    )
}