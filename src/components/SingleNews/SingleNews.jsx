import React from 'react';
import PropTypes from 'prop-types';
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaEye } from "react-icons/fa";

const SingleNews = ({ singleNews }) => {
    const { details, image_url, author, title, total_view, rating } = singleNews;
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='flex items-center gap-4'>
                    <img className='h-12 object-contain rounded-full' src={author.img} alt="" />
                    <div className='flex justify-center flex-col gap-1'>
                        <h2>{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex justify-end items-center gap-4'>
                    <button><CiBookmark /></button>
                    <button><CiShare2 /></button>
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <img src={image_url} alt="" />
                <p>{details.slice(0, 200)}...</p>
                <Link to="/">Read More</Link>
            </div>
            <div className='flex justify-between items-center'>
                <span className='flex items-center gap-2'>
                    <Rating
                        style={{ maxWidth: 120 }}
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