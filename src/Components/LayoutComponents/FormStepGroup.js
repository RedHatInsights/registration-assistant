import React from 'react';
import propTypes from 'prop-types';

import './FormStepGroup.scss';

const FormStepGroup = ({ children }) => (
    <div className="ins-c-form-step-group">
        { children }
    </div>
);

FormStepGroup.propTypes = {
    children: propTypes.node
};

export default FormStepGroup;
