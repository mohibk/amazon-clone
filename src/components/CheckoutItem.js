import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

function CheckoutItem({ item }) {
  const { id, title, price, description, category, image, rating, hasPrime } =
    item || {};

  const dispatch = useDispatch();

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

  const removeItemFromCart = (id) => {
    //Remove item from redux
    dispatch(removeFromCart(id));
  };

  return (
    <div className="md:grid md:grid-cols-5">
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        className="mb-3"
      />
      <div className="col-span-3 mx-5">
        <p className="font-bold">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, idx) => (
              <StarIcon key={idx} className="text-yellow-400 h-5" />
            ))}
        </div>
        <p className="text-xs my-3 line-clamp-3">{description}</p>
        <p className="font-bold mt-3 z-20">{`₹${price * 100}`}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-1">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-3 mx-5 my-auto">
        <button onClick={addItemToCart} className="button">
          Add to Cart
        </button>
        <button onClick={removeItemFromCart} className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
