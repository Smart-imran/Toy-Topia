import React from "react";

const ToysDetailsCard = ({ toys }) => {
  const { toyName, sellerName, sellerEmail, price, rating, availableQuantity, description, pictureURL } = toys;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src={pictureURL}
          alt={toyName}
          className="rounded-xl w-full max-h-96 object-contain"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-center text-pink-500">{toyName}</h2>
      <p className="text-sm mb-1 text-center text-pink-500">Seller: {sellerName}</p>
      <p className="text-sm mb-1 text-center text-pink-500">Email: {sellerEmail}</p>
      <p className="text-lg font-semibold mb-1 text-center text-pink-500">Price: ${price}</p>
      <p className="text-sm mb-1 text-center text-pink-500">Rating: {rating}</p>
      <p className="text-sm mb-1 text-center text-pink-500">Available Quantity: {availableQuantity}</p>
      <p className="text-sm text-center text-pink-500">{description}</p>
    </div>
  );
};

export default ToysDetailsCard;
