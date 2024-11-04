import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const RightSideBar = () => {
    return (
        <div>
            <div>
                <h2 className='font-bold text-xl mb-4'>Login With</h2>
                <div>
                    <button className="py-2 rounded border text-blue-500 border-blue-500 flex items-center justify-center gap-4 w-full my-2"><FcGoogle /> Login With Google</button>
                    <button className="py-2 rounded border border-zinc-900 flex items-center gap-4 w-full justify-center"><FaGithub /> Login With Github</button>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-xl my-6'>Find Us On</h2>
                <div className='text-gray-500 font-medium border border-zinc-200 *:py-3'>
                    <button className="rounded flex items-center gap-4 w-full px-4"><FaFacebookF />Facebook</button>
                    <button className="rounded border-t border-b border-zinc-200 flex items-center gap-4 w-full px-4"><RiTwitterXFill /> Twitter</button>
                    <button className="rounded flex items-center gap-4 w-full px-4"><FaInstagram /> Instagram</button>
                </div>
            </div>

            <div className='my-4'>
                <h2 className='font-bold text-xl my-6'>Q-Zone</h2>
                <div className='flex flex-col gap-4'>
                    <div className='bg-white p-4 rounded-xl flex flex-col gap-3'>
                        <img className='h-48 w-full object-cover rounded-xl' src="https://i.ibb.co.com/gz3MPzN/q1.jpg" alt="" />
                        <h4 className='text-center font-semibold'>Class</h4>
                    </div>
                    <div className='bg-white p-4 rounded-xl flex flex-col gap-3'>
                        <img className='h-48 w-full object-cover rounded-xl ' src="https://i.ibb.co.com/QKYJTdd/q2.webp" alt="" />
                        <h4 className='text-center font-semibold'>Playground</h4>
                    </div>
                    <div className='bg-white p-4 rounded-xl flex flex-col gap-3'>
                        <img className='h-48 w-full object-cover rounded-xl' src="https://i.ibb.co.com/9pHNkNS/q3.webp" alt="" />
                        <h4 className='text-center font-semibold'>Studying</h4>
                    </div>
                </div>
            </div>

        </div >
    );
};


export default RightSideBar;