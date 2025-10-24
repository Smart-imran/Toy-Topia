import React from "react";

const ToysCard = ({ toys }) => {
  const { sellerName, pictureURL, price, description } = toys;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full">
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={pictureURL}
          alt={sellerName}
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{sellerName}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="text-xs text-gray-500 italic"><span className="text-red-500 font-bold text-sm">Price : {price} </span></p>

        <button className="mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold py-2 rounded-lg hover:from-indigo-600 hover:to-blue-500 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ToysCard;
