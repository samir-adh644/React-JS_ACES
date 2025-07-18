import Navbar from "./components/Navbar"

function Singlepage(){
    return (
 
        <> <Navbar />
        
       {/* Blog post with featured image */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto">
    {/* Blog post header */}
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-2">React JS: Build Fast, Interactive UIs with Ease</h1>
      <p className="text-gray-500 text-sm">Published on <time dateTime="2025-07-18">April 5, 2022</time></p>
    </div>
    {/* Featured image */}
    <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" className="w-full h-auto mb-8" />
    {/* Blog post content */}
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">

       <p><strong>React JS</strong> is a JavaScript library for building fast, dynamic user interfaces using reusable components.</p>

  <h2>⚡ Why Use React?</h2>
  <ul>
    <li>Reusable components</li>
    <li>Faster performance with Virtual DOM</li>
    <li>Easy to learn and scalable</li>
  </ul>


  <p>Get started with React and build your first interactive app today!</p>
    </div>
  </div>
</div>

        
         </>
    )
}

export default Singlepage