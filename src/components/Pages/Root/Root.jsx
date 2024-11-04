import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {

};

export default Root;