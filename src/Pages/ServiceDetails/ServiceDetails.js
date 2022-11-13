import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Reviews from '../../components/Reviews/Reviews';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, img, title, description, price, review } = service;
    const { user } = useContext(AuthContext);
    const [control, setControl] = useState(false);
    const [serviceReviews, setServiceReviews] = useState([]);
    const [empty, setEmpty] = useState('');
    console.log(serviceReviews)

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const textArea = form.textArea.value;
        console.log(textArea);

        const review = {
            service_id: _id,
            reviewer: user?.displayName,
            email: user?.email,
            review: textArea,
            reviewerImg: user?.photoURL
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setControl(!control);
                    form.reset();
                }

            })
            .catch(error => {
                console.error(error)
            })

    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service_id=${_id}`)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    setEmpty('No Review Has been added');
                }
                else {
                    setServiceReviews(data);
                    setEmpty('')
                }

            })
            .catch(error => console.error(error))
    }, [control])


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
            <section>
                <div style={{ maxWidth: '1320px' }} className="w-full mx-auto mt-24">
                    <form onSubmit={handleReview}>
                        <h1 style={{ color: '#0F3E3E' }} className='mt-2 text-5xl font-semibold'>Review If You Like My Service</h1>

                        <div className="card mx-auto bg-base-100 shadow-xl p-12 flex justify-center items-center">
                            {
                                !user?.uid ? <><h3>You need to <Link to='/login'> Log In </Link>to give review</h3>
                                    <div>
                                        <textarea className="mt-4 textarea textarea-primary w-full max-w-xs" placeholder="Provide Your Review" name="textArea" required disabled={!user?.uid}></textarea>
                                        <input className="btn btn-primary capitalize w-full mt-4 max-w-xs" type="submit" value="Comment" disabled={!user?.uid} />
                                    </div>
                                </>
                                    :
                                    <div>
                                        <textarea className="mt-4 textarea textarea-primary w-full max-w-xs" placeholder="Provide Your Review" name="textArea"></textarea>
                                        <input className="btn btn-primary capitalize w-full mt-4 max-w-xs" type="submit" value="Comment" />
                                    </div>
                            }

                        </div>
                    </form>
                    <h1 style={{ color: '#0F3E3E' }} className='mt-24 text-center text-5xl font-semibold'>What People say about my service</h1>
                    <h1 className='text-red-400 font-semibold mt-8'>{empty}</h1>
                    <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            serviceReviews.map(serviceReview => <Reviews
                                key={serviceReview._id}
                                serviceReview={serviceReview}
                            ></Reviews>)
                        }

                    </div>

                </div>
            </section >
        </div >


    );
};

export default ServiceDetails;