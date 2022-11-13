import React from 'react';

const Reviews = ({ serviceReview }) => {
    const { review, reviewer, reviewerImg } = serviceReview;
    return (
        <div>
            <div className="card p-6 bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={reviewerImg} alt='' />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-left">{reviewer}</h2>
                    <p className='text-left'>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;