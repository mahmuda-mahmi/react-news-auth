import React from 'react';
import RightSideBar from '../../RightSideBar/RightSideBar';
import Header from '../../Header/Header';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

const News = ({ }) => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-auto my-6 w-11/12 font-poppins">
                <div className='md:col-span-3'>
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div>
                                <h1 className="text-5xl font-bold">React Auth News</h1>
                                <p className="py-6">
                                    {id}
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default News;