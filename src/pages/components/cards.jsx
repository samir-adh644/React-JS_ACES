import { Link } from "react-router-dom";

function Card({ blog }) {
  return (
    <Link to={`/single/${blog.id}`}>
      <div className="group relative max-w-sm w-full col-span-12 sm:col-span-6 lg:col-span-4 p-5 rounded-2xl border border-slate-200 bg-white backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-500 hover:border-blue-300 cursor-pointer overflow-hidden">

     
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-700 to-blue-700 opacity-10 group-hover:opacity-20 blur-lg transition-all duration-500 z-0"></div>

      
        <div className="overflow-hidden rounded-xl z-10 relative">
          <img
            src={blog.image}
            alt={blog.title}
             className="w-full h-48 object-cover rounded-xl transform transition-transform duration-500 hover:text-purple-700"
          />
        </div>

      
        <div className="mt-5 space-y-3 z-10 relative">
          <div className="flex items-center gap-2">
          
            <p className="text-xs text-gray-500 font-mono">{blog.createdAt}</p>
          </div>

          <h2 className="text-lg font-bold text-gray-900 leading-snug transition-all duration-300 group-hover:text-purple-700 ">
            {blog.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
