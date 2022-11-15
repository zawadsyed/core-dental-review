import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const Update = () => {
    useDynamicTitle('Update Review');
    const myReview = useLoaderData();
    const { _id, reviewer, review, reviewerImg, service_id, email } = myReview;
    const [serviceReview, setServiceReview] = useState({});
    const [updatedReview, setUpdatedReview] = useState(myReview);
    useEffect(() => {
        fetch(`https://core-dental-review-server.vercel.app/services/${service_id}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
            .catch(error => console.error(error))
    }, [service_id])
    return (
        <div>
            <h1 className='text-5xl'>Update a review of {serviceReview.title}</h1>
            <form className='mt-10'>
                <textarea className="mt-4 textarea textarea-primary w-full max-w-xs" defaultValue={review} placeholder="Edit Your Review" name="textArea" required ></textarea> <br />
                <input className="btn btn-primary capitalize w-full mt-4 max-w-xs mb-12" type="submit" value="Update" />
            </form>

        </div>
    );
}

export default Update;