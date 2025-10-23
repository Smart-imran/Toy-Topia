import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestDiscount = () => {
    return (
        <div className='flex items-center gap-5 bg-base-300 p-3'>
            <p className='text-base-300 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-7' pauseOnHover={true} speed={50}>
                
            <p className='font-bold bg-base-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, optio?</p>
            
            
            </Marquee>
        </div>
    );
};

export default LatestDiscount;

