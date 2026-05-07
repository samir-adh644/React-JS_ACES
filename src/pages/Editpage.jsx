import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function Edit() {
    const { id } = useParams() // Destructure id for cleaner code
    const navigate = useNavigate()
    
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [description, setDescription] = useState("")

    const API_UPDATE_URL = `http://localhost:3000/api/blog/edit/${id}`
    const API_FETCH_URL = `http://localhost:3000/api/blog/blogs/${id}`

    // 1. Fetch current data to pre-fill the form
    useEffect(() => {
        async function fetchCurrentBlog() {
            try {
                const response = await axios.get(API_FETCH_URL, { withCredentials: true })
                const blog = response.data.blog || response.data
                setTitle(blog.title)
                setSubtitle(blog.subtitle)
                setDescription(blog.description)
            } catch (error) {
                console.error("Error fetching blog for edit:", error)
            }
        }
        fetchCurrentBlog()
    }, [id])

    async function sentEditDataToBackend(e) {
        e.preventDefault()
        try {
            // We send only the text fields. Backend keeps the old image.
            const response = await axios.post(API_UPDATE_URL, {
                title: title,
                subtitle: subtitle,
                description: description,
            }, { withCredentials: true })

            if (response.status === 200) {
                navigate("/single/" + id)
            }
        } catch (error) {
            console.error("Edit failed:", error)
            alert("Error happened while updating.")
        }
    }

    return (
        <>
            <Navbar />
            <div className="mx-14 mt-10 border-2 border-purple-700 rounded-lg">
                <div className="mt-10 text-center text-4xl font-bold">Edit Blogpost</div>
                <form onSubmit={sentEditDataToBackend} className="p-8">
                    <div className="flex gap-4 mb-6">
                        <div className="w-1/2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                            <input 
                                type="text" 
                                value={title} // Controlled component
                                className="block w-full rounded-md border border-slate-300 px-3 py-4 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700" 
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Subtitle</label>
                            <input 
                                type="text" 
                                value={subtitle} 
                                className="block w-full rounded-md border border-slate-300 px-3 py-4 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700" 
                                onChange={(e) => setSubtitle(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                        <textarea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700" 
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="cursor-pointer rounded-lg bg-purple-700 px-8 py-5 text-sm font-semibold text-white hover:bg-blue-700 transition">
                            Update Blog
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit