import React from 'react';
import PropTypes from 'prop-types';
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaEye } from "react-icons/fa";

const SingleNews = ({ singleNews }) => {
    const { details, image_url, author, title, total_view, rating, _id } = singleNews;
    return (
        <div className='border border-zinc-200 rounded-md mb-8'>
            {/* author section */}
            <div className='grid grid-cols-2 bg-zinc-200 p-3'>
                <div className='flex items-center gap-4'>
                    <img className='h-10 object-contain rounded-full' src={author.img} alt="" />
                    <div className='flex justify-center flex-col gap-1'>
                        <h2 className='font-semibold text-sm'>{author.name}</h2>
                        <p className='text-zinc-500 text-sm'>{author.published_date.slice(0, 10)}</p>
                    </div>
                </div>
                <div className='flex justify-end items-center gap-4 text-lg px-3 text-zinc-800'>
                    <button><CiBookmark /></button>
                    <button><CiShare2 /></button>
                </div>
            </div>

            {/* news section */}
            <div className='p-4 flex flex-col gap-6'>
                <h2 className='font-bold text-lg'>{title}</h2>
                <img src={image_url} alt="" />
                <div className='text-zinc-500'>
                    <p>{details.slice(0, 300)}...</p>
                    <Link className='text-orange-400 font-bold' to={`/news/${_id}`}>Read More...</Link>
                </div>
            </div>
            <hr className='border-gray-300 border-1 m-2' />
            <div className='flex justify-between items-center m-4 text-zinc-500 font-medium' >
                <span className='flex items-center gap-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating.number}
                        halfFillMode
                        readOnly
                    />{rating.number}</span>
                <span className='flex items-center gap-2'><FaEye />{total_view}</span>
            </div>
        </div >
    );
};

SingleNews.propTypes = {

};

export default SingleNews;