import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let listOfRestaurants = [
    {
      type: "restaurant",
      data: {
        id: "153030",
        name: "Vishal Chinese",
        cloudinaryImageId: "gcrqiuwxfawcou6dvzac",
        cuisines: ["Chinese"],
        costForTwo: 50000,
        deliveryTime: 19,
        avgRating: 3.8,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "153031",
        name: "McDonald",
        cloudinaryImageId: "gcrqiuwxfawcou6dvzac",
        cuisines: ["Chinese,Burger"],
        costForTwo: 50000,
        deliveryTime: 19,
        avgRating: 4,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "153033",
        name: "Burger King",
        cloudinaryImageId: "gcrqiuwxfawcou6dvzac",
        cuisines: ["Chinese,Burger"],
        costForTwo: 50000,
        deliveryTime: 19,
        avgRating: 5,
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here

            listOfRestaurants = listOfRestaurants.filter((res) => {
              return res.data.avgRating >= 5;
            });

            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
