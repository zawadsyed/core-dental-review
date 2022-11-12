import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <section style={{ maxWidth: '1320px' }} className='mt-24 mx-auto'>
                <h1 style={{ color: '#0F3E3E' }} className='text-5xl font-semibold'>Dr. Fill's Services</h1>

                <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Services;