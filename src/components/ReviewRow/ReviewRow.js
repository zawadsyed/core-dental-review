import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ myReview, handleDelete, handleUpdate }) => {

    const { _id, reviewer, review, reviewerImg, service_id } = myReview;

    // review according to service state
    const [serviceReview, setServiceReview] = useState({});
    // for single review info
    useEffect(() => {
        fetch(`https://core-dental-review-server.vercel.app/services/${service_id}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
            .catch(error => console.error(error))
    }, [service_id])
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost btn-xs'>
                    Delete
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={reviewerImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewer}</div>
                        <Link to={`/services/${service_id}`}>
                            <div className="text-sm opacity-50">Service: {serviceReview.title}</div>
                        </Link>

                    </div>
                </div>
            </td>

            <td>{review}</td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">Edit Review</button>
            </th>
        </tr>
    );
};

export default ReviewRow;