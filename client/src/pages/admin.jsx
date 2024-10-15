import { useNavigate } from "react-router-dom";
import admin from "../assets/images/admin.jpg";
import { useState } from "react";

const Admin = () => {
  const navigate = useNavigate();
  const [id, setid] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");

  const idvalidate = (e) => {
    e.preventDefault();
    if (id == "admin" && pass == 123) {
      navigate("/adminpage");
    } else {
      seterror("Invalid i'd");
      setid("");
      setpass("");
      setTimeout(() => {
        seterror("");
      }, 3000);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <div className="w-[50%] hidden md:block ">
          <img src={admin} alt="Signin" className="w-full h-full ml-10" />
        </div>
        <div className="w-full md:w-[50%] flex  justify-center items-center bg-white">
          <div className="flex flex-col items-center p-10 rounded-lg shadow-lg  md:w-[60%] bg-white">
            <h2 className="text-[#A6DCE6] italic text-4xl font-semibold mb-8">
              ADMIN LOGIN
            </h2>

            <div className="md:w-full w-[60vw]">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                I'D
              </label>
              <input
                type="text"
                value={id}
                onChange={(e) => {
                  setid(e.target.value);
                }}
                placeholder="Enter your I'd"
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />

              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => {
                  setpass(e.target.value);
                }}
                placeholder="Enter your password"
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />
            </div>

            <button
              onClick={idvalidate}
              className="mt-6 w-full py-3 bg-[#A6DCE6] text-white font-bold text-lg rounded-lg hover:bg-[#5C8C8F] transition-colors duration-300"
            >
              Login
            </button>
            <h2 className="mt-4 text-red-500">{error}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
