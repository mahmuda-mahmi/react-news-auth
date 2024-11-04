import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-6'>
            <Link className='font-pirata text-6xl'>React Deadly News</Link>
            <div className='font-poppins text-[#706F6F] my-4'>
                <p className='text-base font-medium my-2'>Journalism Without Fear or Favour</p>
                <p className='text-base font-medium flex items-center justify-center gap-1'>
                    <span className='font-semibold text-zinc-700'>{moment().format("dddd,")}</span>
                    <span>{moment().format("MMMM D, YYYY")}</span>
                </p>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;