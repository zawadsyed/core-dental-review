import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const myReview = useLoaderData();
    const { _id, reviewer, review, reviewerImg, service_id, email } = myReview;
    const [serviceReview, setServiceReview] = useState({});
    const [updatedReview, setUpdatedReview] = useState(myReview);
    console.log(updatedReview)
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service_id}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
            .catch(error => console.error(error))
    }, [service_id])
    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const textArea = form.textArea.value;
        const update = {
            _id,
            service_id,
            reviewer,
            email,
            review: textArea,
            reviewerImg
        }
        setUpdatedReview(update);
        fetch(`http://localhost:5000/my-reviews/${_id}`, {
            method: 'PUT',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))


    }
    return (
        <div>
            <h1>Update a review of {serviceReview.title}</h1>
            <form onSubmit={handleUpdateReview}>
                <textarea className="mt-4 textarea textarea-primary w-full max-w-xs" defaultValue={review} placeholder="Edit Your Review" name="textArea" required ></textarea>
                <input className="btn btn-primary capitalize w-full mt-4 max-w-xs" type="submit" value="Update" />
            </form>

        </div>
    );
};

export default Update;