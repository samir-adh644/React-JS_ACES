
import axios from "axios";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function SinglePage() {
  const data = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  // Fetch single blog
  async function fetchSingleBlog() {
    const response = await axios.get(
      "https://687af358abb83744b7ee465d.mockapi.io/blogs/" + data.id
    );
    if (response.status === 200) {
      setBlog(response.data);
    } else {
      alert("Something went wrong");
    }
  }

  // Delete blog
  async function deleteBlog() {
    const response = await axios.delete(
      "https://687af358abb83744b7ee465d.mockapi.io/blogs/" + data.id
    );
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-xl border border-gray-200">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[350px] object-cover "
          />

          <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-purple-700">{blog.title}</h1>
            <h3 className="text-lg font-semibold text-gray-500 italic">{blog.subtitle}</h3>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              {blog.description}
            </p>

            <div className="flex gap-4 mt-6">
              <Link to={"/edit/" + blog.id}>
                <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                  ✏️ Edit Me
                </button>
              </Link>
              <button
                onClick={deleteBlog}
                className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                🗑️ Delete Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
