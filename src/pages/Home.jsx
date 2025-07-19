import { useEffect ,useState} from "react";
import Navbar from "./components/Navbar"
import Cards from "./components/cards"
import axios from 'axios'
function Home(){
    const[blogs,setBlogs]=useState([]);

    //--->
    async function fetchBlogs(){
     const response=  await axios.get("https://687af358abb83744b7ee466b.mockapi.io/Blogs")
    
    
     if(response.status=200){
 setBlogs(response.data);
     }
     else{
        alert("Error!!!")
     }
    

    }

    //--->
// call back and anonymus functions to learn
    useEffect(()=>{
fetchBlogs()
    },[])

    console.log(blogs,"this is blogs")
    return (

    <>


<>
<Navbar /> 
<div className="flex justify-between flex-wrap">
    {blogs.map(function(blog){
return(

<Cards key={blog.id} blog={blog} /> 
)
    })}
 </div> 
</>


    </>


    )
}

export default Home