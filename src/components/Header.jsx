import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { IoMdCart } from "react-icons/io";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-slate-50 flex justify-between items-center sticky top-0 z-10 mb-2">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" width={80} />
      </div>

      <div className="pr-8">
        <ul className="flex gap-8 flex-row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="relative">
            <Link to="/cart">
              <IoMdCart size={22} className="z-20" />
            </Link>
            <div className="absolute left-4 bottom-3 bg-pink-600 rounded-[50%] px-1  text-xs text-white">
              {cartItems.length}
            </div>
          </li>
          <li>
            <button
              className="border bg-blue-600 text-white px-2 rounded-md"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? "Logout" : "Login"}
            </button>
          </li>

          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
