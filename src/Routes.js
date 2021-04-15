import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './Components/Loading/Loading';

const Register = lazy(() =>
  import(/* webpackChunkName: "Register" */ './Routes/Register/Register')
);
const paths = { register: '/' };

export const Routes = () => (
  <Switch>
    <Route
      key="register"
      exact
      path={paths.register}
      rootClass="Insights"
      component={() => (
        <Suspense fallback={<Loading />}>
          {' '}
          <Register />{' '}
        </Suspense>
      )}
    />
    <Redirect path="*" to={paths.register} push />
  </Switch>
);
