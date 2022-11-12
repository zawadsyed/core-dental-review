import React from 'react';
import img from '../../assets/images/dentist.png';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-bg py-16'>
            <div>
                <div className="hero-content mx-auto flex-col lg:flex-row-reverse lg:justify-between">
                    <img src={img} alt='dentist' className="max-w-sm" />
                    <div className='hero-contents flex flex-col items-start'>
                        <h1 className="text-6xl font-extrabold leading-tight text-left">For All-Round <br /> Healthy Smiles</h1>
                        <p className="py-6 text-left">Comprehensive general and <br />cosmetic dentistry by Dr.Filler</p>
                        <button className="btn btn-primary capitalize text-lg px-6">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;