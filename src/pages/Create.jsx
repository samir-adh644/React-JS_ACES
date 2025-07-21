import Navbar from "./components/Navbar";
import { useState } from "react";
import axios from "axios";
// import { Await } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function sendDataToBackend(e) {
    e.preventDefault()
   const response = await axios.post("https://687af358abb83744b7ee466b.mockapi.io/Blogs", {
      title: title,
      subtitle: subtitle,
      description: description,
      image: image
    })
    console.log(response)
  }
  const navigate = useNavigate()

  const returnHome =async ()=>{
    const response = await axios.get("https://687af358abb83744b7ee466b.mockapi.io/Blogs")
    if(response.status ===200){
      navigate("/")
    }
  }



  return (
    <>
      <Navbar />

      <div className="mx-14 mt-10 border-2 bordeg-purple-700 rounded-lg">
        <div className="mt-3 text-center text-4xl font-bold">
          Create the Blogpost
        </div>
        <form className="p-8" onSubmit={sendDataToBackend}>
          <div className="flex gap-4">
            <input
              type="text"
              name="title"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 sm:text-sm"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              name="subtitle"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 sm:text-sm"
              placeholder="Subtitle"
              onChange={(e) => setsubTitle(e.target.value)}
            />
          </div>

          <div className="my-6 flex gap-4">
            <input
              type="url"
              name="imageUrl"
              id="imageUrl"
              placeholder="Enter image URL"
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 sm:text-sm"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div>
            <textarea
              name="textarea"
              id="text"
              cols={30}
              rows={10}
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-700 placeholder:text-slate-400 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              onClick={returnHome}
              className="cursor-pointer rounded-lg bg-purple-700 px-8 py-5 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
