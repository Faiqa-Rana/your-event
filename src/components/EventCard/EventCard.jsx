import { Link } from 'react-router-dom';
import { WishlistIcon } from '../index';

const EventCard = () => {
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Link
      to="/user"
      className="flex w-[300px] flex-col overflow-hidden rounded-md shadow-lg"
    >
      <div className="relative flex h-[150px]">
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="event-image"
        />
        <span
          className="absolute -bottom-5 right-8"
          onClick={handleWishlistClick}
        >
          <WishlistIcon />
        </span>
      </div>

      <div className="space-y-2 p-5 px-6">
        <span className="text-sm text-primary-500">Art & Craft</span>
        <h3 className="text-xl font-bold text-gray-700">
          Our Excellent Partner France Pavilion
        </h3>
        <div className="flex text-sm text-gray-800">
          <p>June 21, 2024</p> -<p>Melbourne, AUS</p>
        </div>
        <p className="text-sm text-gray-500">Start at $312.00</p>
      </div>
    </Link>
  );
};

export default EventCard;
