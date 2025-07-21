import { useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function Edit(){
    const data = useParams()
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [subtitle,setSubtitle] = useState("")
    const [description,setDescription] = useState("")
    const [image, setImage] = useState("")

    async function sentEditDataToBackend(e){
        e.preventDefault()
      const response =   await axios.put("https://687af358abb83744b7ee465d.mockapi.io/blogs/" + data.id,{
            title : title, 
            subtitle : subtitle, 
            description : description, 
            image : image
        })
        if(response.status == 200){
            navigate("/single/" + data.id)
        }else{
            alert("ERror happened")
        }
    }

    return(
       <>
       <Navbar />
    <div className="mx-14 mt-10 border-2 border-black rounded-lg">
  <div className="mt-10 text-center font-bold">Blog Edit</div>
  <div className="mt-3 text-center text-4xl font-bold">Edit a Blog</div>
  <form onSubmit={sentEditDataToBackend} className="p-8">
    <div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 sm:text-sm" placeholder="Enter a title" onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 sm:text-sm" placeholder="Enter a subtitle" onChange={(e)=>setSubtitle(e.target.value)} />
    </div>
    <input type="text" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 sm:text-sm" placeholder="Enter a image URL" onChange={(e)=>setImage(e.target.value)} />
    <div className>
      <textarea onChange={(e)=>setDescription(e.target.value)} name="description" id="text" cols={30} rows={10} className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" defaultValue={"Enter Description"} />
    </div>
    <div className="text-center">
      <button type="submit" className="cursor-pointer rounded-lg bg-purple-700 px-8 py-5 text-sm font-semibold text-white hover:bg-blue-700">Edit Blog</button>
    </div>
  </form>
</div>

       </>

    )
}

export default Edit