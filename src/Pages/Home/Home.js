import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <Hero></Hero>
            <section style={{ maxWidth: '1320px', color: '#0F3E3E' }} className='mt-24 mx-auto'>
                <h1 className='text-5xl font-semibold'>Dr. Fill's Services</h1>

                <div className='mt-16 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div>
                    <button className='btn btn-primary capitalize text-lg px-6'>See all Services</button>
                </div>
            </section>
        </div>
    );
};

export default Home;