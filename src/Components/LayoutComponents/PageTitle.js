import './PageTitle.scss';
import propTypes from 'prop-types';

import React from 'react';

const PageTitle = ({ children }) => (
    <div className={`ins-c-page-title`}>
        { children }
    </div>
);

PageTitle.propTypes = {
    children: propTypes.node
};

export default PageTitle;
