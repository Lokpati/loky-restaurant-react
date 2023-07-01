import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2725034&lng=72.8611481&restaurantId=302456&submitAction=ENTER"
    );

    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <h2>Menu</h2>
      <ul>
        <li>Burger</li>
        <li>Chinese</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
