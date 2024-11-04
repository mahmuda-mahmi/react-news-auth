import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import RightSideBar from '../../RightSideBar/RightSideBar';
import BreakingNews from '../../BreakingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import SingleNews from '../../SingleNews/SingleNews';

const Home = () => {
    const [news, setNews] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto my-6 w-11/12">
                <div className=''>
                    <LeftSideBar data={data}></LeftSideBar>
                </div>
                <div className='md:col-span-2'>
                    <h2 className='text-4xl font-bold'>
                        Deadly News Home
                    </h2>
                    <div>
                        {
                            news.slice(0, 4).map(singleNews => <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>)
                        }
                    </div>
                </div>
                <div className=''>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {

};

export default Home;