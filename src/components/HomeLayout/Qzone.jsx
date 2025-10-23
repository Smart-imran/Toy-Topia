import React from 'react';
import img1 from "../../assets/swimming.png";
import img2 from "../../assets/playground.png";
import img3 from "../../assets/class.png";

const Qzone = () => {
    return (
        <div className='bg-base-300 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className="div">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;