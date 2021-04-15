import './App.scss';

import React, { useEffect } from 'react';

import { Routes } from './Routes';
import { withRouter } from 'react-router-dom';

const App = (props) => {
  async function initChrome() {
    insights.chrome.init();
    insights.chrome.identifyApp('registration');
  }

  useEffect(() => {
    initChrome();
    insights.chrome.hideGlobalFilter?.();
  }, []);

  return <Routes childProps={props} />;
};

export default withRouter(App);
