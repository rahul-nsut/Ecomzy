import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  // console.log("Printing Cart");
  // console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (
      <div className="flex max-w-[1200px] justify-center flex-col md:flex-row mx-auto ">
      <div >
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col p-5 my-14 justify-between min-h-[78vh]">

        <div className="flex h-[100%] gap-3 flex-col ">
          <div className="font-bold text-2xl text-green-800">YOUR CART</div>
          <div className="font-bold text-green-700  text-6xl">SUMMARY</div>
          <p className="text-xl font-semibold text-white ">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>
        <div className="flex flex-col w-[500px]"> 
          <p className=" -mb-28 text-xl text-white font-bold ">Total Amount: ${totalAmount}</p>
          <a href="https://pages.razorpay.com/pl_Lzjp6zAH5WrPPe/view" className=" bg-green-700  mt-40 hover:bg-purple-100 rounded-lg text-white transition duration-300 ease-linear border-2 border-green-600 
          font-bold hover:text-green-700 p-3 text-xl w-full text-center">
            CheckOut Now
          </a>
        </div>

      </div>


    </div>) : 
    (<div className="flex items-center justify-center flex-col min-h-[100vh] ">
      <h1 className="font-bold text-gray-200 mb-3 text-2xl">Your cart is currently empty!!</h1>
      <Link to={"/"}>
      <button class="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-9 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-12 tracking-wider">SHOP NOW</button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
