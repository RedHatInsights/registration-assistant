import React from 'react';
import propTypes from 'prop-types';

import './TitleGroup.scss';

const TitleGroup = ({ children }) => (
    <div className="ins-c-title-group">
        { children }
    </div>
);

TitleGroup.propTypes = {
    children: propTypes.node
};

export default TitleGroup;
