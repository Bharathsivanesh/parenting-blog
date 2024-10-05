import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleUser, CircleX } from "lucide-react";

const Navbar = () => {
  const [visible, setvisible] = useState(false);

  return (
    <>
      <div className="w-full h-16 bg-[#A6DCE6] flex flex-row justify-evenly z-10 relative">
        <div className="w-[50%] text-white font-black italic text-2xl flex justify-center items-center h-full ">
          <h2>Parents Blogs</h2>
        </div>
        <div className="flex justify-evenly flex-row mt-8 w-1/2 italic text-white font-bold">
          <Link to="/">HOME</Link>

          <Link to="/">ADMIN</Link>
          <CircleUser
            onClick={() => {
              setvisible(true);
            }}
            className="hover:text-cyan-300 cursor-pointer"
          />
        </div>
      </div>

      {visible && (
        <div className="fixed inset-0   z-10 flex justify-center items-center min-h-screen bg-opacity-80 bg-gray-900">
          <form className="w-2/5 h-96 p-10 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg space-y-4 relative z-50">
            <div className="absolute top-4 right-4">
              <CircleX
                className="w-8 h-8 text-red-600 cursor-pointer"
                onClick={() => {
                  setvisible(false);
                }}
              />
            </div>

            <h1 className="text-[#A6DCE6] text-4xl font-bold text-center mb-4 uppercase">
              Login
            </h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-[#A6DCE6]"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-[#A6DCE6]"
            />
            <button className="w-full bg-[#A6DCE6] text-white py-2 rounded hover:bg-[#A6DCE6] transition duration-300">
              Submit
            </button>
            <button
              onClick={() => {
                setvisible(false);
              }}
              className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500 transition duration-300"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
