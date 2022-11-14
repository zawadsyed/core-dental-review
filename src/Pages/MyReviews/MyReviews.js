import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewRow from '../../components/ReviewRow/ReviewRow';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const MyReviews = () => {
    useDynamicTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const navigate = useNavigate();
    console.log(myReviews)
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(error => console.error(error))
    }, [user?.email])

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure to delete the Review??');
        if (confirmation) {
            fetch(`http://localhost:5000/my-reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Good job!',
                            'You deleted the review successfully',
                            'success'
                        )
                        const remainingReview = myReviews.filter(review => review._id !== id);
                        setMyReviews(remainingReview);
                    }
                })
        }
    }
    const handleUpdate = id => [
        navigate(`/my-reviews/${id}`)
    ]
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Reviewer</th>
                            <th>Review</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myReviews.map(myReview => <ReviewRow key={myReview._id}
                            myReview={myReview}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        ></ReviewRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;