import axios from "axios";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function SinglePage(){
    const data = useParams()
    const [blog,setBlog] = useState({})
    async function fetchSingleBlog(){
        const response =   await axios.get("https://687af358abb83744b7ee465d.mockapi.io/blogs/" + data.id)
        if(response.status == 200){
            setBlog(response.data)
        }else{
            alert("Something went wrong")
        }
    }
    useEffect(()=>{
        fetchSingleBlog()
    },[])
    const navigate = useNavigate()
    async function deleteBlog(){
        const response = await axios.delete("https://687af358abb83744b7ee465d.mockapi.io/blogs/" + data.id)
        if(response.status == 200){
            navigate("/")
        }else{
            alert("something went wrong ")
        }
    }
    return(
        <>
        <Navbar />
        <div>
            <img src={blog.image} alt="" />
            <h1>{blog.title} </h1>
            <h3>{blog.subtitle}</h3>
            <p>{blog.description}</p>
            <button onClick={deleteBlog} className="bg-red-500 text-white">Delete Me </button>
        </div>
        </>
    
    )
}


export default SinglePage