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
            <section>
                <h1>Dr. Fill's Services</h1>

                <div>
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

export default Home;