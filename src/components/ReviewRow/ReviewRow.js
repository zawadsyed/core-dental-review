import React from 'react';

const ReviewRow = ({ myReview, handleDelete }) => {
    const { _id, reviewer, review, reviewerImg, email } = myReview;
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
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>

            <td>{review}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Update Review</button>
            </th>
        </tr>
    );
};

export default ReviewRow;