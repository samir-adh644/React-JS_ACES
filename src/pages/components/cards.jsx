
function Cards({blog}) {
  console.log(blog)
  return (
    <div className="max-w-screen-xl mx-auto p-6 sm:p-10 md:p-16">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-3xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <a href="/singlepage">
          <img
            className="w-full h-56 object-cover"
            src={blog.image}
            alt="React Blog Post"
          />
        </a>
        <div className="p-6 bg-purple-700 text-white">
          <a
            href="/singlepage"
            className="text-xl font-semibold hover:text-black block mb-2"
          >
           {blog.title}
          </a>
          <p className="text-sm leading-relaxed">
           {blog.subtitle}
          </p>
          <div className="mt-4 text-xs text-gray-300">
            By <span className="font-medium text-white">Samir Adhikari</span> |
            Location: <span className="text-white">Itahari, Nepal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
