import signin from "../assets/images/signin.jpg";

const Signin = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <div className="w-[50%] hidden md:block ">
          <img src={signin} alt="Signin" className="w-full h-full " />
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center bg-white">
          <div className="flex flex-col items-center p-10 rounded-lg shadow-lg w-2/3 md:w-4/5 lg:w-3/5 bg-white">
            <h2 className="text-[#A6DCE6] italic text-4xl font-bold mb-8">
              WELCOME!
            </h2>

            <div className="w-full">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />

              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />

              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6DCE6] focus:border-transparent"
              />
            </div>

            <button className="mt-6 w-full py-3 bg-[#A6DCE6] text-white font-bold text-lg rounded-lg hover:bg-[#5C8C8F] transition-colors duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
