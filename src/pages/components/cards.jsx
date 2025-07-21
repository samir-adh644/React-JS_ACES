import { Link } from "react-router-dom"



function Card({blog}){
    return(

  <Link to={"/single/" + blog.id}>
<div className="group max-w-sm col-span-12 sm:col-span-6 lg:col-span-4 p-4 rounded-xl shadow-md border hover:shadow-2xl hover:border-gray-300 transition-all duration-500 bg-white cursor-pointer">
  <div className="overflow-hidden rounded-lg">
    <img 
      src={blog.image} 
      alt={blog.title} 
      className="w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  <div className="mt-4 space-y-2">
    <div className="flex items-center gap-2">
      <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
        News
      </span>
      <p className="text-xs text-gray-500 font-mono">{blog.createdAt}</p>
    </div>

    <h2 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-purple-700 group-hover:underline-offset-4 transition-all duration-300">
      {blog.title}
    </h2>
  </div>
</div>

  </Link>
    )
}


export default Card