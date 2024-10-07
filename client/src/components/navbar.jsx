import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleUser, CircleX } from "lucide-react";
import { getUser } from "../services/api";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const validateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await getUser(
        emailRef.current.value,
        passwordRef.current.value
      );

      if (response.data.user.length > 0) {
        const user = response.data.user[0];
        navigate("/userpage", {
          state: { name: user.name, email: user.email },
        });
      } else {
        setError("Invalid email or password");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error in login, please try again.");
    }
  };

  return (
    <>
      <div className="w-full h-16 bg-[#A6DCE6] flex flex-row justify-evenly z-10 relative">
        <div className="w-[50%] text-white font-black italic text-2xl flex justify-center items-center h-full ">
          <h2 className="mt-5">Parent Blogs</h2>
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
          <form
            className="md:w-2/5  w-3/4 h-96 p-10 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg space-y-4 relative z-50"
            onSubmit={validateUser}
          >
            <div className="absolute top-4 right-4">
              <CircleX
                className="w-8 h-8 text-[#A6DCE6] cursor-pointer"
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
              placeholder="Enter Email"
              ref={emailRef}
              className="w-full p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-[#A6DCE6]"
            />
            <input
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
              className="w-full p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-[#A6DCE6]"
            />
            <button
              type="submit"
              className="w-full bg-[#A6DCE6] text-white py-2 rounded hover:bg-[#A6DCE6] transition duration-300"
            >
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
            <Link to="signin" className="text-[#A6DCE6]">
              Don&apos;t have an account?
            </Link>
            {error && <h2 className="mt-2 text-red-500">{error}</h2>}
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
