import { useEffect, useState } from "react"
import Card from "./components/cards"
import Navbar from "./components/Navbar"
import axios from 'axios'
import { useParams } from "react-router-dom"



function Home(){
  
  const [blogs,setBlogs] = useState([])

  const API_URL = "https://blogpost-api-cb1b.onrender.com/api/blog/blogs"

  async function fetchBlogs() {
    try {
      const response = await axios.get(API_URL, {
        // 2. CRITICAL: Include this so cookies are sent to the backend
        withCredentials: true 
      })

      if (response.status === 200) {
        
        setBlogs(response.data.blogs)
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error)
      alert("Error fetching blogs. Check if you are logged in!")
    }
  }

  useEffect(()=>{
   fetchBlogs()
  },[])
  

    return(
<>
     <Navbar />
       <div className="flex justify-between flex-wrap p-10">
        {blogs.length > 0 ? (
          blogs.map((blog) => <Card key={blog.id || blog._id} blog={blog} />)
        ) : (
          <p className="text-center w-full mt-10">No blogs found.</p>
        )}
      </div>



</>
    )
}
export default Home