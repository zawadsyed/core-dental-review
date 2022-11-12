import React from 'react';

const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt={title} /></figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-left">{title}</h2>
                    <p className='text-left pb-4'>{description.slice(0, 100)}...</p>
                    <p className='text-left text-3xl text-cyan-600 font-semibold pb-4'>${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;