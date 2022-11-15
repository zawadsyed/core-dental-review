import React from 'react';

const Reviews = ({ serviceReview }) => {
    const { review, reviewer, reviewerImg } = serviceReview;
    return (
        <div>
            <div className="card h-auto p-6 bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={reviewerImg} alt="Reviewer" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-left">{reviewer}</h2>
                    <p className='text-left'>{review}</p>
                </div>
            </div>
        </div >
    );
};

export default Reviews;