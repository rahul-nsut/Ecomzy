import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove } from "../redux/Slices/cartSlice"
import { useState } from "react";

const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const removefromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item is successfully removed");
  }
  return (
    
    <div className="flex items-center justify-between p-2 md:p-5 mt-2 mb-2 border-slate-900 border-b-4 ">
    <div className="flex flex-col md:flex-row gap-8 justify-between p-2 mt-14 mb-2 md:mx-5">
      <div className="w-[89%]">
        <img src={item.image} className="object-cover"/>
      </div>
      <div className="md:ml-10 self-start space-y-5 w-[100%]  md:w-[70%]">
        <h1 className="text-2xl font-semibold text-slate-100  ">{item.title}</h1>
        <h1 className=" text-base text-slate-200 font-medium mt-6 ">{item.description.split(" ").slice(0,17).join(" ")+ "..."}</h1>
        <div>
          <p className="font-bold text-lg text-green-600 mt-6">${item.price}</p>
          <div onClick={removefromCart} class=" ml-52 -mt-8  bg-red-200 group hover:bg-red-400 transition duration-300 ease-in w-[39px] cursor-pointer rounded-full p-3 mr-3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-red-800 group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartItem;
