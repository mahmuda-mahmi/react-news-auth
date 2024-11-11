import React from 'react';
import { LuCalendarDays } from "react-icons/lu";

const LeftSideBar = ({ data }) => {
    return (
        <div>
            <div className='mb-6'>
                <h2 className="text-xl font-semibold mb-6">All categories</h2>
                {
                    data.map(cat => <h4 className='px-6 py-3 my-1 rounded-sm text-zinc-500 font-medium'>{cat.name}</h4>)
                }
            </div>
            <div>
                <div>
                    <img className='rounded-lg my-2' src="https://i.ibb.co.com/yYdQBgR/s1.webp" alt="" />
                    <h2 className='py-2 font-bold'>Palestine sets sights on FIFA World Cup 2026 despite Israel’s war on Gaza</h2>
                    <div className='flex gap-4 items-center text-sm text-zinc-500 mb-6'>
                        <h4>Sports </h4>
                        <span className='flex gap-2 items-center'><LuCalendarDays />4th June, 2024</span>
                    </div>
                </div>
                <div className='my-4'>
                    <img className='rounded-lg my-2' src="https://i.ibb.co.com/Vv4Tfjw/s2.webp" alt="" />
                    <h2 className='py-2 font-bold'>Stunning Verstappen wins wet Sao Paulo Grand Prix from 17th on the grid</h2>
                    <div className='flex gap-4 items-center text-sm text-zinc-500 mb-6'>
                        <h4>Sports </h4>
                        <span className='flex gap-2 items-center'><LuCalendarDays />4th June, 2024</span>
                    </div>
                </div>
                <div>
                    <img className='rounded-lg my-2' src="https://i.ibb.co.com/s1jWpY1/s3.webp" alt="" />
                    <h2 className='py-2 font-bold'>Australia vs Pakistan, first ODI: Captain Cummins leads hosts to nervy win</h2>
                    <div className='flex gap-4 items-center text-sm text-zinc-500 mb-6'>
                        <h4>Sports </h4>
                        <span className='flex gap-2 items-center'><LuCalendarDays />4th June, 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftSideBar.propTypes = {

};

export default LeftSideBar;