import { useState } from "react";
import signin from "../assets/images/signin.jpg";
import { createUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState(false);
  const navigate = useNavigate();

  const validatedata = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 1) {
      seterror("*name required");
      return;
    }

    if (!emailRegex.test(mail)) {
      seterror("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      seterror("Password must be at least 8 characters long");
      return;
    }
    seterror("");
    const userData = {
      name: name,
      email: mail,
      password: password,
    };
    createUser(userData);
    setname("");
    setmail("");
    setpassword("");
    setsuccess(true);
  };

  // const closesuccess = () => {
  //   setsuccess(false);
  // };
  const jumphome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <div className="w-[50%] hidden md:block ">
          <img src={signin} alt="Signin" className="w-full h-full " />
        </div>
        <div className="w-full md:w-[50%] flex  justify-center items-center bg-white">
          <div className="flex flex-col items-center p-10 rounded-lg shadow-lg  md:w-[60%] bg-white">
            <h2 className="text-[#A6DCE6] italic text-4xl font-bold mb-8">
              WELCOME!
            </h2>

            <div className="md:w-full w-[60vw]">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />

              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={mail}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
                placeholder="Enter your email"
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />

              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="Enter your password"
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />
            </div>

            <button
              onClick={validatedata}
              className="mt-6 w-full py-3 bg-[#A6DCE6] text-white font-bold text-lg rounded-lg hover:bg-[#5C8C8F] transition-colors duration-300"
            >
              Register
            </button>
            <h2 className="mt-5 text-red-500">{error}</h2>
          </div>
        </div>
      </div>

      {success && (
        <div className="h-full w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 m-w-sm flex-col text-center rounded-lg justify-center w-40vw space-y-10">
            <h3 className="text-2xl font-sans font-semibold text-black ">
              Registration Successful
            </h3>
            <p className="text-gray-700 mb-6">
              Your account has been successfully Registered
            </p>
            <div className="h-full w-full gap-5 flex items-center justify-center">
              <button
                className="bg-[#a6dce6] font-semibold text-white px-4 py-2 rounded-lg hover:bg-[#35d0ec] transition duration-300"
                onClick={jumphome}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
