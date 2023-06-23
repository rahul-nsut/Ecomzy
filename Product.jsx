import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/cartSlice";
const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addToCart= () =>{
    dispatch(add(post));
    toast.success("Item added to the cart");
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item is removed from cart");
  }

  return (
    <div className=" flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl gap-3 p-4 mt-10  ml-5">
      <div>
        <p className=" text-white font-semibold text-[22px] truncate w-40 mt-1 text-left ">{post.title}</p>
      </div>
      <div>
        <p className=" w-40 text-gray-400 font-normal text-[16px] text-left">
          {post.description.split(" ").slice(0,10).join(" ")+ "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>
      </div>

      <div className="flex flex-row gap-[40px] justify-between items-center mt-5 w-full">
        <div>
            <p className="text-green-400 font-semibold text-[19px]">${post.price} </p>
        </div>
          {
            cart.some((p)=> p.id == post.id)  ? 
            (
              <button onClick={removeFromCart} className=" text-white border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase tracking-wide 
              hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                Remove Item
              </button>
            ):
            (
              <button onClick={addToCart} className=" text-white border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase tracking-wide 
              hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                Add to Cart
              </button>
            )
          }
      </div>
      
      </div>
  );
};

export default Product;
