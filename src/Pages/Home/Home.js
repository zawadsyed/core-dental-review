import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import img from '../../assets/images/dentistry-right.png'
import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    // const services = servicesData.slice(0, 3)
    // console.log(services)
    return (
        <div>
            <Hero></Hero>
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
                <Link to='/services'>
                    <button className='btn btn-primary capitalize text-lg px-6'>See all Services</button>
                </Link>
            </section>
            <section style={{ maxWidth: '1320px' }} className='mt-24 mx-auto'>
                <div className='hero-bg py-12 rounded-2xl'>
                    <div className="hero-content mx-auto flex-col lg:flex-row-reverse lg:justify-between px-14">
                        <img src={img} alt='dentist' className="max-w-sm" />
                        <div className='flex flex-col items-start'>
                            <h1 style={{ color: '#0F3E3E' }} className='mt-2 text-left text-5xl font-semibold'>Dentistry Done Right</h1>
                            <p style={{ color: '#3D6666' }} className="py-6 text-left">Adults and kids, I welcome patients of all ages! <br /> I am passionate about building lifetime relationships <br /> through positive experiences</p>
                            <button className="btn btn-primary capitalize text-lg px-6">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ maxWidth: '1320px' }} className='mt-24 mx-auto'>
                <div className='hero-bg py-12 rounded-2xl'>
                    <div className="hero-content mx-auto flex-col lg:flex-row lg:justify-between px-14">
                        <img src={img} alt='dentist' className="max-w-sm" />
                        <div className='flex flex-col items-start'>
                            <h1 style={{ color: '#0F3E3E' }} className='mt-2 text-left text-5xl font-semibold'>Dentistry Done Right</h1>
                            <p style={{ color: '#3D6666' }} className="py-6 text-left">Adults and kids, I welcome patients of all ages! <br /> I am passionate about building lifetime relationships <br /> through positive experiences</p>
                            <button className="btn btn-primary capitalize text-lg px-6">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;