import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((menuItem) => (
          <li key={menuItem.card.info.id}>
            {menuItem.card.info.name} -{" "}
            {menuItem.card.info.price / 100 ||
              menuItem.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
