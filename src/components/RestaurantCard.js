import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;

  const renderStarRating = (rating) => {
    if (rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;

      const starElements = [];

      // Render full stars
      for (let i = 0; i < fullStars; i++) {
        starElements.push(<span key={i}>&#9733;</span>);
      }

      // Render half star
      if (hasHalfStar) {
        starElements.push(
          <span key="halfStar" className="half-star">
            &#9733;
          </span>
        );
      }

      return starElements;
    } else {
      return "Not rated";
    }
  };

  return (
    <div className="w-64 m-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg object-cover w-full h-48"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5 className="py-2">{renderStarRating(avgRating)}</h5>
      <h5>₹ {costForTwo / 100} FOR TWO</h5>
      <h6 className="py-2">{deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;
