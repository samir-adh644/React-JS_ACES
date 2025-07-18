function Cards(){
return(
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
    <a href="/singlepage">
      <img className="w-full" src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="" />
    </a>
    <div className="relative -mt-16 px-10 pt-5 pb-16 bg-purple-700 m-10 rounded-2xl">
      <a href="/singlepage" className="font-semibold text-lg inline-block hover:text-white transition duration-500 ease-in-out inline-block mb-2">
       React JS: Build Fast, Interactive UIs with Ease</a>
      <p className="text-white text-sm">
        React JS is a JavaScript library for building fast, dynamic, and reusable user interfaces.
      </p>
      <p className="mt-5 text-black text-xs">
        By
        <a href="#" className="text-xs text-white transition duration-500 ease-in-out">
          Samir Adhikari
        </a> | in <a href="#" className="text-xs text-white transition duration-500 ease-in-out">
          Itahari
        </a>, <a href="#" className="text-xs text-white transition duration-500 ease-in-out">
          Nepal
        </a>
      </p>
    </div>
  </div>
</div>

)
}

export default Cards