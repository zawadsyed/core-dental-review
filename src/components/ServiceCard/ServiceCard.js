import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price } = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                {/* react photo viewer */}
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='h-56 object-cover w-full' src={img} alt={title} /></figure>
                    </PhotoView>

                </PhotoProvider>

                <div className="card-body p-4">
                    <h2 className="card-title text-left">{title}</h2>
                    <p className='text-left pb-4'>{description.slice(0, 100)}...</p>
                    <p className='text-left text-3xl text-cyan-600 font-semibold pb-4'>Service Cost: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary capitalize w-full">More Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;