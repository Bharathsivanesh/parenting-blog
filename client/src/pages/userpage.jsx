import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Userpage = () => {
  const location = useLocation();

  const { name, email } = location.state;
  const capname = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <div className="bg-[#A6DCE6] flex flex-row h-12 justify-around">
        <div className="w-1/2">
          <h1 className="font-serif text-white text-2xl font-black mt-3">
            Parenting Blog's
          </h1>
        </div>
        <div className=" w-96 flex  mt-3 flex-row justify-end     gap-10   text-white  ">
          <h1 className="text-2xl font-black"> {capname}</h1>
          {/* <ArrowRight size={32} /> */}
          <button className="bg-red-500 text-white font-black rounded-lg w-24 h-8">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Userpage;
