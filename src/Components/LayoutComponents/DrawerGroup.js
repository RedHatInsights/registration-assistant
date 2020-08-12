import React from 'react';
import propTypes from 'prop-types';

import './DrawerGroup.scss';

const DrawerGroup = ({ children }) => (
    <div className="ins-c-drawer-group">
        { children }
    </div>
);

DrawerGroup.propTypes = {
    children: propTypes.node
};

export default DrawerGroup;
