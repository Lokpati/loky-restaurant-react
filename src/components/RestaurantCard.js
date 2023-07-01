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
  return (
    <div className=" w-64 m-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5 className="py-2">{avgRating} stars</h5>
      <h5>{costForTwo / 100} FOR TWO</h5>
      <h6 className="py-2">{deliveryTime}minutes</h6>
    </div>
  );
};

export default RestaurantCard;
