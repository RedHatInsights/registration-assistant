import './App.scss';
import React, { useEffect } from 'react';
import { RouteList } from './Routes';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';

const App = (props) => {
  const chrome = useChrome();

  useEffect(() => {
    insights.chrome.hideGlobalFilter?.();
  }, []);

  useEffect(() => {
    if (chrome) {
      const registry = getRegistry();
      registry.register({ notification: notificationsReducer });
    }
  }, [chrome]);

  return (
    <React.Fragment>
      <NotificationsPortal />
      <RouteList childProps={props} />
    </React.Fragment>
  );
};

export default App;
