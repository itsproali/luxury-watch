import React from 'react';
import useUsers from '../../customHook/useUsers';
import DisplayUsers from '../DisplayUsers/DisplayUsers';

const Reviews = () => {
    const [users] = useUsers([])
    return (
                <div className="customer-reviews my-10 mx-4 md:mx-16">
                <h2 className='text-4xl font-bold text-center my-5 text-pink-600'>Top Reviews</h2>

                <div className="review-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                users.map(user => <DisplayUsers
                    key={user.id}
                    user={user}
                ></DisplayUsers>)
            }
            </div>
        </div>
    );
};

export default Reviews;