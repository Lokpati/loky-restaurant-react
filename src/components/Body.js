import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here

            const filteredList = listRestaurants.filter((res) => {
              return res.data.avgRating >= 4;
            });

            setListRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
