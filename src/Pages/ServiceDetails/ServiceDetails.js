import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { img, title, description, price, review } = service
    return (
        <div style={{ maxWidth: '1320px' }} className='mx-auto'>
            <div className="card card-compact">
                <div className="card-body p-4">
                    <h1 style={{ color: '#0F3E3E' }} className="flex items-start text-6xl font-extrabold leading-tight text-left">{title}
                        <span className="badge badge-success font-normal text-lg">{review.rating}</span>
                    </h1>
                    <p style={{
                        fontWeight: '400', fontSize: '24px', lineHeight: '160%', color: '#3D6666'
                    }} className='text-left pb-4'>{description}</p>
                    <p className='text-left text-3xl text-cyan-900 font-extrabold pb-4'>${price}</p>
                </div>
                <figure><img className='w-full' src={img} alt={title} /></figure>
            </div>
        </div >
    );
};

export default ServiceDetails;