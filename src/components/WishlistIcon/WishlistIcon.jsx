import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';

const WishlistIcon = () => {
  const handleClickWishlist = () => {

  }

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
    onClick={handleClickWishlist}
    >
      <AiOutlineHeart color="#f6699e" size={24} />
      {/* <AiFillHeart /> */}
    </span>
  );
};

export default WishlistIcon;
