import React from 'react';
import propTypes from 'prop-types';
import './Group.scss';

const Group = ({ type, children }) => {

    function typeFunc(type) {
        if (type === 'drawer-group') {
            return 'ins-c-drawer-group';
        }
        else if (type === 'form-step') {
            return 'ins-c-form-step-group';
        }
        else if (type === 'page-title') {
            return 'ins-c-page-title';
        }
        else if (type === 'title-group') {
            return 'ins-c-title-group';
        }
        else {
            return 'ins-c-group';
        }
    }

    return (
        <div className={ typeFunc(type) }>
            { children }
        </div>
    );
};

Group.propTypes = {
    children: propTypes.node,
    type: propTypes.string
};

export default Group;
