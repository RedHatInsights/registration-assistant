import './App.scss';

import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Routes } from './Routes';
import { withRouter } from 'react-router-dom';

const App = (props) => {
    async function initChrome() {
        insights.chrome.init();
        insights.chrome.identifyApp('registration');
    }

    useEffect(() => {
        initChrome();
    }, []);

    return <Routes childProps={props} />;
};

App.propTypes = {
    history: PropTypes.object
};

export default withRouter(App);
