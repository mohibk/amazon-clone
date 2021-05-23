import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
// import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING) + 1) + MIN_RATING
  );
  const hasPrime = useState(Math.random() < 0.5);

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    //Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToCart(product));
  };

  return (
    <div className="relative flex flex-col bg-white m-5 p-10 z-30">
      <p className="absolute top-2 right-2 text-xs text-gray-400 italic">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt={title}
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, idx) => (
            <StarIcon key={idx} className="h-5 text-yellow-400" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        {/* <Currency quantity={price} currency="GBP" /> */}
        {`₹ ${Math.floor(price * 100)}`}
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToCart} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
