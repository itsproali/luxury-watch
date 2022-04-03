import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../customHook/useUsers';
import DisplayUsers from '../DisplayUsers/DisplayUsers';

const Home = () => {

    const [users] = useUsers([])
    const total = users.slice(0, 3);
    return (
        <div className='mx-4 md:mx-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className="main-image w-full text-center">
                    <img className='w-full' src="main-image.jpg" alt="Luxury Watch" />
                </div>

                <div className="home-text">
                    <h1 className="text-5xl font-bold text-pink-600">Premium Digital Watch</h1>
                    <p className='text-1xl my-4 font-medium text-gray-500'>Beautiful, bright AMOLED display and the broadest range of all-day health monitoring features keeps track of your energy levels, respiration, menstrual cycle, stress, sleep, estimated heart rate and more</p>
                    <button className="font-medium px-4 py-2 bg-pink-200 text-pink-500 cursor-pointer rounded hover:bg-pink-300 hover:text-pink-700 ease-in-out duration-300">Live Demo</button>
                </div>
            </div>

            <div className="customer-reviews my-10">
                <h2 className='text-4xl font-bold text-center my-5 text-pink-500'>Customer Reviews ({users.length})</h2>

                <div className="review-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        total.map(user =>
                            <DisplayUsers
                                key={user.id}
                                user={user}
                            ></DisplayUsers>
                        )
                    }
                </div>

                <Link to='/reviews'>
                    <button className="block mx-auto my-5 font-medium px-8 py-2 bg-pink-200 text-pink-500 cursor-pointer rounded hover:bg-pink-300 hover:text-pink-700 ease-in-out duration-300">See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;