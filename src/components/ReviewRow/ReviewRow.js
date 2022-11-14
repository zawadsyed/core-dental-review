import React, { useEffect, useState } from 'react';

const ReviewRow = ({ myReview, handleDelete, handleUpdate }) => {
    const { _id, reviewer, review, reviewerImg, service_id } = myReview;
    const [serviceReview, setServiceReview] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service_id}`)
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
                        <div className="text-sm opacity-50">{serviceReview.title}</div>
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