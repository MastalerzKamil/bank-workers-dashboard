import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  UserList as UserListView,
  ExortionsList as ExortionsListView,
  ApplicationsList as ApplicationsListView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from './views';

import {
  ApplicationCheck as ApplicationCheckView,
} from 'containers';

import * as routes from 'constants/routes';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from={routes.HOME}
        to={routes.USERS}
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path={routes.DASHBOARD}
      />
      <RouteWithLayout
        component={ApplicationsListView}
        exact
        layout={MainLayout}
        path={routes.APPLICATIONS}
      />
      <RouteWithLayout
        component={ExortionsListView}
        exact
        layout={MainLayout}
        path={routes.EXORTIONS}
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path={routes.USERS}
      />
      <RouteWithLayout
        component={ApplicationCheckView}
        exact
        layout={MainLayout}
        path={routes.SINGLE_APPLICATION()}
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path={routes.ACCOUNT}
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path={routes.SETTINGS}
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path={routes.SIGN_UP}
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path={routes.SIGN_IN}
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path={routes.NOT_FOUND}
      />
      <Redirect to={routes.NOT_FOUND} />
    </Switch>
  );
};

export default Routes;
