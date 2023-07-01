import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-purple-400">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="nav-flex">
        <ul className="flex p-4 m-4 justify-center ">
          <li className=" p-2 m-2 ">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className=" p-2 m-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-2 m-2 ">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className=" p-2 m-2 ">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className=" p-2 m-2 ">Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnNameReact(btnNameReact == "Logout" ? "Login" : "Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
