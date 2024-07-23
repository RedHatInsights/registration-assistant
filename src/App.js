import './App.scss';

import React, { useEffect } from 'react';

import { RouteList } from './Routes';

const App = (props) => {
  useEffect(() => {
    insights.chrome.hideGlobalFilter?.();
  }, []);

  return <RouteList childProps={props} />;
};

export default App;
