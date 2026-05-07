import axios from "axios";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function SinglePage() {
  const { id } = useParams(); // Destructure id directly
  const [blog, setBlog] = useState({}); // Initialize as object
  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:3000/api/blog/blogs";
  const API_DELETE_URL = "http://localhost:3000/api/blog/delete";

  // Fetch single blog
  async function fetchSingleBlog() {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`, {
        withCredentials: true
      });
      
      // Based on your previous response structure, it's likely response.data.blog
      if (response.status === 200) {
        
        setBlog(response.data.post); 
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      alert("Could not find this blog.");
    }
  }

  // Delete blog
  async function deleteBlog() {
    const confirmDelete = window.confirm("Are you sure you want to delete this?");
    if (!confirmDelete) return;

    try {
      // Typically backends use axios.delete for this
      const response = await axios.post(
  `${API_DELETE_URL}/${id}`, 
  {}, // Empty body
  { withCredentials: true } // Config goes here
);

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete the blog.");
    }
  }

  useEffect(() => {
    fetchSingleBlog();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[400px] object-cover"
            />
          )}

          <div className="p-8 space-y-4">
            <h1 className="text-4xl font-bold text-purple-700">{blog.title}</h1>
            <h3 className="text-xl font-semibold text-gray-500 italic">
              {blog.subtitle}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {blog.description}
            </p>

            <div className="flex gap-4 pt-6">
              <Link to={"/edit/" + blog._id}>
                <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-lg shadow-md transition-all hover:scale-105">
                  ✏️ Edit Blog
                </button>
              </Link>
              <button
                onClick={deleteBlog}
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 rounded-lg shadow-md transition-all hover:scale-105"
              >
                🗑️ Delete Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
