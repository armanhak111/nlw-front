import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { SystemAdministrator } from './Containers/SystemAdministrator';
import { adminAccessSelector } from './store/selector';
import { ROUTES } from './Utils/constants';

export const Routes: React.FC = () => {
    const adminAccess = useSelector(adminAccessSelector)
    return (
        <div>
            <Switch>
                <Route path={ROUTES.admin} component={SystemAdministrator}>
                    {!adminAccess && <Redirect to='/' />}
                </Route>
            </Switch>
        </div>
    )
}