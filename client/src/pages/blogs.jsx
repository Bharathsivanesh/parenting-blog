import React, { useEffect, useState } from "react";
import { getUserBlogs } from "../services/api";
import nodataimg from "../assets/images/nodata.jpg";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showblog, setshowblog] = useState(false);
  const [selectblog, setselectblog] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await getUserBlogs();
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const displayblog = (blog) => {
    setselectblog(blog);
    setshowblog(true);
  };

  const closeblog = () => {
    setshowblog(false);
    setselectblog(null);
  };

  return (
    <div className="h-screen w-full">
      <div className="w-full h-16 bg-[#A6DCE6]">
        <h1 className="text-white font-black text-center text-2xl">
          Blog&apos;s View
        </h1>
      </div>
      <div className="flex md:flex-row   flex-col justify-center items-center mt-10 flex-wrap gap-5">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="border rounded-lg w-80 md:w-[40vw] h-full  p-4"
            >
              <h2 className="font-bold italic text-lg mb-4 h-10">
                {blog.title}
              </h2>
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:w-full h-64 object-cover rounded-md mb-3"
                />
              )}
              <button
                onClick={() => displayblog(blog)}
                className="text-white bg-[#A6DCE6] hover:bg-blue-700 px-4 py-2 rounded"
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <div className="w-1/2 h-full">
            <img src={nodataimg} alt="" />
          </div>
        )}
      </div>

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

export default Blogs;
