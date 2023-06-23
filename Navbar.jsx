import {FaCartPlus} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div >
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5 ">
          <img src="https://codehelp-shopping-cart.netlify.app/logo.png" className="h-14"/>
        </div>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p className="text-xl hover:text-green-500 transition-all duration-300 ease-in  ">Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaCartPlus  className=" text-2xl hover:text-green-500 transition-all duration-300 ease-in "/>
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white ">{cart.length}</span>
          </div>
        </NavLink>

      </div>
      </nav>
    </div>
  )
};

export default Navbar;
