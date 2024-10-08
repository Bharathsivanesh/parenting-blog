import React, { useEffect, useState } from "react";
import { getUserBlogs } from "../services/api"; // Import the function to fetch blogs

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div className="h-screen w-full">
      <div className="w-full h-10 bg-[#A6DCE6]">
        <h1 className="text-white font-black text-center text-2xl">
          Blog&apos;s View
        </h1>
      </div>
      <div className="grid grid-cols-3  gap-4 p-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg p-4">
            <h2 className="font-bold h-12 italic text-lg mb-3">{blog.title}</h2>
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-md"
              />
            )}

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }} // Render HTML content safely
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
