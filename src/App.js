import './App.scss';

import React, { useEffect } from 'react';

import { RouteList } from './Routes';

const App = (props) => {
  async function initChrome() {
    insights.chrome.init();
    insights.chrome.identifyApp('registration');
  }

  useEffect(() => {
    initChrome();
    insights.chrome.hideGlobalFilter?.();
  }, []);

  return <RouteList childProps={props} />;
};

export default App;
