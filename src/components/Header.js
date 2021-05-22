import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center flex-grow bg-amazon_blue p-1 py-2 space-x-4 pr-4">
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2 relative">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
          <p className="text-md text-white absolute right-1 bottom-4">.in</p>
          <p className="absolute right-1 top-4 font-bold text-lg text-gray-400">
            prime
          </p>
          {/* TODO: Change amazon logo to prime version */}
        </div>

        <div className="text-white flex items-center space-x-1">
          <LocationMarkerIcon className="h-5" />
          <div>
            <p className="text-xs text-gray-400 font-semibold">
              Deliver to Mohib
            </p>
            <p className="font-bold">Jamshedpur 832110</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center flex-grow h-10 rounded-md bg-yellow-400">
          <input
            type="text"
            className="p-2 pr-4 w-full flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-10 px-3 py-3 rounded-r-md flex cursor-pointer hover:bg-yellow-500" />
        </div>

        {/* Right */}
        <div className="flex items-center text-white text-xs mx-6 space-x-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Mohib</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link flex items-center relative">
            <span className="font-bold absolute top-0 right-0 text-black bg-yellow-400 h-4 w-4 text-center rounded-full md:right-6">
              2
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm p-2">
        <p className="flex items-center link">
          <MenuIcon className="mr-1 h-6" />
          All
        </p>
        <p className="link">Mohib's Amazon.in</p>
        <p className="link">Amazon Pay</p>
        <p className="link">Gift Cards</p>
        <p className="link">Home Improvement</p>
        <p className="hidden sm:inline link">Gift Ideas</p>
        <p className="hidden sm:inline link">AmazonBasics</p>
        <p className="hidden sm:inline link">Pet Supplies</p>
        <p className="hidden sm:inline link">Sports, Fitness & Outdoors</p>
        <p className="hidden sm:inline link">Computers</p>
      </div>
    </header>
  );
}

export default Header;
