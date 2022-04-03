import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center mx-4 md:mx-16'>
            <div className="main-image w-full text-center">
                <img className='w-full' src="main-image.jpg" alt="Luxury Watch" />
            </div>

            <div className="home-text">
                <h1 className="text-5xl font-bold text-pink-600">Premium Digital Watch</h1>
                <p className='text-1xl my-4 font-medium text-gray-500'>Beautiful, bright AMOLED display and the broadest range of all-day health monitoring features keeps track of your energy levels, respiration, menstrual cycle, stress, sleep, estimated heart rate and more</p>
                <button className="font-medium px-4 py-2 bg-pink-200 text-pink-500 cursor-pointer rounded hover:bg-pink-300 hover:text-pink-700 ease-in-out duration-300">Live Demo</button>
            </div>
        </div>
    );
};

export default Home;