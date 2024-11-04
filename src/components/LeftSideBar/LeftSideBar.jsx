import React from 'react';
import PropTypes from 'prop-types';

const LeftSideBar = ({ data }) => {
    return (
        <div>
            <div>
                <h2 className="text-2xl">All categories</h2>
                {
                    data.map(cat => <h4>{cat.name}</h4>)
                }
            </div>
            <div>
                <div>
                    <img src="https://i.ibb.co.com/yYdQBgR/s1.webp" alt="" />
                    <h2>Palestine sets sights on FIFA World Cup 2026 despite Israel’s war on Gaza</h2>
                </div>
                <div className='my-4'>
                    <img src="https://i.ibb.co.com/Vv4Tfjw/s2.webp" alt="" />
                    <h2>Stunning Verstappen wins wet Sao Paulo Grand Prix from 17th on the grid</h2>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/s1jWpY1/s3.webp" alt="" />
                    <h2>Australia vs Pakistan, first ODI: Captain Cummins leads hosts to nervy win</h2>
                </div>
            </div>
        </div>
    );
};

LeftSideBar.propTypes = {

};

export default LeftSideBar;