import React from 'react';

const DisplayUsers = props => {
    const { name, img, description, rating } = props.user
    return (
        <div className="review p-3 rounded  shadow-lg hover:shadow-xl">
            <img className='w-[70px] h-[70px] block mx-auto rounded-full' src={img} alt={name} />
            <h3 className='font-bold text-2xl text-center my-1'>{name}</h3>
            <p>{description}</p>
            <p className='font-bold'>Rating : {rating}</p>
        </div>
    );
};

export default DisplayUsers;