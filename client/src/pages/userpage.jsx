import { useLocation, useNavigate } from "react-router-dom";
import bgimg from "../assets/images/parentuser.jpg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { createblog } from "../services/api";
import { getuserblogs, deleteblog } from "../services/api";
import nopost from "../assets/images/nopost.jpg";
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
  const [showconfirmation, setconfirmation] = useState(false);
  const [showblog, setshowblog] = useState(false);
  const [blogsFetched, setBlogsFetched] = useState(false);
  const [selectblog, setselectblog] = useState(null);
  const [deleteblogid, setdeleteblogid] = useState(null);

  const toolbarOptions = [
    [{ header: [1, 2, 3] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ];

  const handledeleteblog = async () => {
    try {
      await deleteblog(deleteblogid);
      setBlogs(blogs.filter((blog) => blog._id !== deleteblogid));
      setconfirmation(false);
      setdeleteblogid(null);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

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
      setBlogsFetched(true);
    } catch (error) {
      console.log("Fetching error blogs:", error);
    }
  };

  const displayblog = (blog) => {
    setselectblog(blog);
    setshowblog(true);
  };

  const closeblog = () => {
    setshowblog(false);
    setselectblog(null);
  };

  useEffect(() => {
    viewblogs();
  }, []);

  return (
    <div className="m-0 p-0 h-screen w-screen overflow-x-hidden">
      <div className="bg-[#A6DCE6] w-full flex flex-row h-18  justify-around">
        <div className="md:w-1/2 w-96">
          <h1 className="font-serif    text-white mt-3 text-xl md:text-2xl  md:font-black mt-3">
            Parenting Blog's
          </h1>
        </div>
        <div className="w-96 flex mt-3 mb-2 flex-row justify-center md:justify-end gap-5 md:gap-10 text-white">
          <h1 className=" text-xl md:text-2xl font-black"> {capname}</h1>
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

      <div className="relative  w-full h-screen">
        <img
          src={bgimg}
          alt="Parenting background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h2 className="text-white md:text-4xl text-2xl  font-bold mb-4">
            Welcome Back, Super Parent!
          </h2>
          <p className="text-white text-lg  w-full p-5 md:p-0 md:w-1/2 text-center">
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
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black p-6 bg-opacity-70">
          <div className="bg-gray-100 p-6  flex flex-col rounded-lg md:w-1/2 w-86   h-[50vh] md:h-[60vh] overflow-y-auto">
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
              className="bg-transparent w-full md:w-full border-gray-200 rounded h-9 border-2 mb-2 "
            />
            <ReactQuill
              value={content}
              onChange={setcontent}
              className=""
              modules={{
                toolbar: {
                  container: toolbarOptions,
                },
              }}
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-10 md:mt-14"
            />
            <div className="flex flex-row mt-10">
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

      {blogsFetched && blogs.length === 0 ? (
        <div className="flex ml-auto w-full h-full flex-row justify-center items-center">
          <h1 className="text-3xl text-red-500">Oops! No post yet</h1>
          <img src={nopost} alt="No posts" className="w-82 h-96" />
        </div>
      ) : (
        blogs.length > 0 && (
          <div className="p-6 bg-white">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#A6DCE6]">
              Your Blog's
            </h2>
            <div className="flex md:flex-row flex-col justify-center items-center mt-10 flex-wrap gap-5">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="border rounded-lg w-full md:w-[35vw] h-full p-4"
                >
                  <h2 className="font-bold italic text-lg mb-4 h-10">
                    {blog.title}
                  </h2>
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 rounded-md mb-3"
                    />
                  )}
                  <div className="flex md:flex-row">
                    <button
                      onClick={() => displayblog(blog)}
                      className="text-white bg-[#A6DCE6] hover:bg-blue-700 md:px-4 md:py-2 w-24 h-10 rounded"
                    >
                      Read More
                    </button>
                    <button
                      className="bg-red-500 md:px-7 md:py-2 w-24 rounded text-white ml-5"
                      onClick={() => {
                        setdeleteblogid(blog._id);
                        setconfirmation(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      {showconfirmation && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[30vw] h-52 ">
            <p
              className="text-end p-3 font-black text-red-500 cursor-pointer"
              onClick={() => {
                setconfirmation(false);
              }}
            >
              X
            </p>
            <div className="flex flex-col justify-center items-center mt-6">
              <p className="font-bold">Click Confirm To Delete</p>
              <button
                onClick={handledeleteblog}
                className="mt-5 bg-red-500 px-3 rounded text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {showblog && selectblog && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full md:w-2/3 p-6 rounded-lg shadow-lg   max-h-full md:h-[90vh]  overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectblog.title}</h2>
            {selectblog.image && (
              <img
                src={selectblog.image}
                alt={selectblog.title}
                className="md:w-full h-56 md:h-96 w-[100%]  object-cover mb-4 rounded-md"
              />
            )}
            <div
              className="blog-content mb-4"
              dangerouslySetInnerHTML={{ __html: selectblog.content }}
            />
            <button
              className="text-white bg-[#A6DCE6] hover:bg-blue-700 px-4 py-2 rounded"
              onClick={closeblog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userpage;
