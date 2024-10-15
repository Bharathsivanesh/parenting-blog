import usercard1 from "../assets/images/usercard1.png";
import blogcard1 from "../assets/images/blogcard1.png";
import { useNavigate } from "react-router-dom";

const Adminpage = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/admin");
  };
  return (
    <div className="bg-admin-bg h-screen bg-cover bg-center">
      <div className="bg-black bg-opacity-50 h-full">
        <div className="w-full h-12 bg-black opacity-30 flex justify-around items-center "></div>
        <div className="w-full absolute top-0 text-white flex justify-around flex-row items-center h-12 font-bold">
          <div className="w-[50%]">
            <h1 className="md:text-xl  md:tracking-widest">WELCOME ADMIN</h1>
          </div>
          <div>
            <h1 className="md:text-xl">BHARATH</h1>
          </div>
          <button
            onClick={back}
            className="h-8 rounded w-20 bg-gradient-to-t from-[#5271ff] to-[#a5e7ff]"
          >
            Logout
          </button>
        </div>

        <div className="w-full gap-10 flex md:flex-row  flex-col h-[80%] mx-auto my-auto items-center justify-center ">
          <div className=" mt-28 md:mt-0 md:w-[45%] h-full flex justify-center items-center ">
            <img
              src={usercard1}
              alt=""
              className="md:w-[60%] md:h-[60%] w-[60%] mx-auto opacity-85 rounded-2xl cursor-pointer  transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className=" md:mt-0 md:w-[45%] h-full flex justify-center items-center">
            <img
              src={blogcard1}
              alt=""
              className="md:w-[60%] md:h-[60%] w-[60%]  mx-auto opacity-85 rounded-2xl  cursor-pointer  transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
