import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loading from './Components/Loading/Loading';
import { useRefreshFeatureFlag } from './Utilities/Hooks';

const Register = lazy(() =>
  import(/* webpackChunkName: "Register" */ './Routes/Register/Register')
);

const NewRegister = lazy(() =>
  import(/* webpackChunkName: "Register" */ './Routes/Register/NewRegister')
);

const paths = { register: '/' };

export const RouteList = () => {
  const isRefreshEnabled = useRefreshFeatureFlag();

  return (
    <Routes>
      <Route
        key="register"
        exact
        path={paths.register}
        rootClass="Insights"
        element={
          <Suspense fallback={<Loading />}>
            {' '}
            {isRefreshEnabled ? <NewRegister /> : <Register />}{' '}
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to={paths.register} />} />
    </Routes>
  );
};
