import './App.scss';
import React, { useEffect } from 'react';
import { RouteList } from './Routes';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';

const App = (props) => {
  useEffect(() => {
    insights.chrome.hideGlobalFilter?.();
  }, []);

  return (
    <React.Fragment>
      <NotificationsPortal />
      <RouteList childProps={props} />
    </React.Fragment>
  );
};

export default App;
