import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { img, title, description, price, review } = service;
    // const UserReview = {
    //     img: img,
    //     name: name,
    //     review: message,
    // }

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const textArea = form.textArea.value;
        console.log(email, name, textArea);
    }



    return (
        <div>
            <section>
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
                        <figure><img src={img} alt={title} /></figure>
                    </div>
                </div >
            </section>
            <form onSubmit={handleReview}>
                <div className="card mx-auto bg-base-100 shadow-xl p-12 flex justify-center items-center">
                    <div>
                        <input type="email" placeholder="Your Email Here" className="input input-bordered input-primary w-full max-w-xs" name="email" /> <br />
                        <input type="text" placeholder="Your Name Here" className="mt-4 input input-bordered input-primary w-full max-w-xs" name="name" /> <br />
                        <textarea className="mt-4 textarea textarea-primary w-full max-w-xs" placeholder="Provide Your Review" name="textArea"></textarea>
                        <input className="btn btn-primary capitalize w-full mt-4 max-w-xs" type="submit" value="Comment" />
                    </div>
                </div>
            </form>
            {/* <section>
                <div style={{ maxWidth: '1320px' }} className="carousel w-full mx-auto">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>


    );
};

export default ServiceDetails;