import { useEffect, useState } from "react"
import Card from "./components/cards"
import Navbar from "./components/Navbar"
import axios from 'axios'
import { useParams } from "react-router-dom"



function Home(){
  
  const [blogs,setBlogs] = useState([])
  async function fetchBlogs(){
  const response = await axios.get("https://687af358abb83744b7ee465d.mockapi.io/blogs")
  console.log(response)
  if(response.status == 200){
    setBlogs(response.data)
  }else{
    alert("Error aayooo !!!")
  }
  }

  useEffect(()=>{
   fetchBlogs()
  },[])
  
console.log(blogs,"This is blogs")
    return(
<>
     <Navbar />
       <div className="flex justify-between flex-wrap">
        {blogs.map(function(blog){
          return(
            <Card key={blog.id} blog={blog} />
          )
        })}
    
       </div>



</>
    )
}
export default Home