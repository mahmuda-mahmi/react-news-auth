import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
const BreakingNews = () => {
    return (
        <div className='flex gap-4 bg-gray-200 p-4 w-11/12 mx-auto'>
            <button class="px-6 py-2 bg-orange-600 text-white font-bold">Primary</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className='mr-6' to="/">I can be a React component, multiple React components </Link>
                <Link className='mr-6' to="/">I can be a React component, multiple React components </Link>
                <Link className='mr-6' to="/">I can be a React component, multiple React components </Link>
                <Link className='mr-6' to="/">I can be a React component, multiple React components </Link>
                <Link className='mr-6' to="/">I can be a React component, multiple React components </Link>
            </Marquee>
        </div>
    );
};

BreakingNews.propTypes = {

};

export default BreakingNews;