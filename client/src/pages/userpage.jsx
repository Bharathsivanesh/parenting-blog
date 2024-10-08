import { useLocation, useNavigate } from "react-router-dom";
import bgimg from "../assets/images/parentuser.jpg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { createblog } from "../services/api";
import { getuserblogs } from "../services/api";
const Userpage = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const [texteditor, settexteditor] = useState(false);
  const { name, email } = location.state;
  const capname = name.charAt(0).toUpperCase() + name.slice(1);
  const [blogs, setBlogs] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [image, setImage] = useState("");

  const toolbarOptions = [
    [{ header: [1, 2, 3] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  const validate = (e) => {
    e.preventDefault();
    const userblog = {
      title: title,
      content: content,
      mail: email,
      image: image,
    };
    console.log(userblog);
    createblog(userblog);
    settitle("");
    setcontent("");
    setImage("");
  };

  const viewblogs = async (e) => {
    e.preventDefault();
    try {
      const response = await getuserblogs(email);
      setBlogs(response.data.blogs);
    } catch (error) {
      console.log("Fetching error blogs:", error);
    }
  };

  useEffect(() => {
    viewblogs();
  }, []);

  return (
    <>
      <div className="bg-[#A6DCE6] flex flex-row h-16 justify-around">
        <div className="w-1/2">
          <h1 className="font-serif text-white text-2xl font-black mt-3">
            Parenting Blog's
          </h1>
        </div>
        <div className="w-96 flex mt-3 flex-row justify-end gap-10 text-white">
          <h1 className="text-2xl font-black"> {capname}</h1>
          <button
            onClick={() => {
              navigation("/");
            }}
            className="bg-red-500 text-white font-black rounded-lg w-24 h-8"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="relative w-full h-screen">
        <img
          src={bgimg}
          alt="Parenting background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h2 className="text-white text-4xl font-bold mb-4">
            Welcome Back, Super Parent!
          </h2>
          <p className="text-white text-lg w-1/2 text-center">
            Explore personalized tips, advice, and stories that inspire and
            empower you to make the best decisions for your family. Your
            parenting journey just got smoother and more fun!
          </p>
          <div className="flex -flex-row gap-8">
            <button
              onClick={() => {
                settexteditor(true);
              }}
              className="font-bold text-white bg-[#A6DCE6] rounded-lg h-10 w-32 mt-8 flex items-center justify-center gap-2 hover:bg-red-600 transition duration-300"
            >
              Create
              <span className="text-xl">+</span>
            </button>
            <button
              onClick={viewblogs}
              className="font-bold text-white bg-red-600 rounded-lg h-10 w-32 mt-8 flex items-center justify-center gap-2 hover:bg-[#A6DCE6] transition duration-300"
            >
              My Blog's
            </button>
          </div>
        </div>
      </div>

      {texteditor && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70 ">
          <div className="bg-gray-100 p-6  flex flex-col rounded-lg md:w-1/2 w-full  ">
            <h2 className="text-2xl font-bold mb-4 text-red-500 text-center">
              Create Your Post
            </h2>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
              placeholder="Enter Title"
              className="bg-transparent w-32 md:w-full border-gray-200 rounded h-9 border-2 mb-2 "
            />
            <ReactQuill
              value={content}
              onChange={setcontent}
              className="mb-4 "
              modules={{
                toolbar: {
                  container: toolbarOptions,
                },
              }}
            />
            <input type="file" onChange={handleImageChange} />
            <div className="flex flex-row mt-3">
              <button
                onClick={validate}
                className="bg-red-500  text-white rounded-lg h-10 w-24"
              >
                Submit
              </button>
              <button
                onClick={() => settexteditor(false)}
                className="bg-red-500 text-white ml-5 rounded-lg h-10 w-24"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {blogs.length > 0 && (
        <div className="p-6 bg-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Your Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt="Blog visual"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="mb-4">{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Userpage;
