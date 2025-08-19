import './App.scss';
import React, { useEffect } from 'react';
import { RouteList } from './Routes';
import NotificationsProvider from '@redhat-cloud-services/frontend-components-notifications/NotificationsProvider';

const App = (props) => {
  useEffect(() => {
    insights.chrome.hideGlobalFilter?.();
  }, []);

  return (
    <React.Fragment>
      <NotificationsProvider>
        <RouteList childProps={props} />
      </NotificationsProvider>
    </React.Fragment>
  );
};

export default App;
