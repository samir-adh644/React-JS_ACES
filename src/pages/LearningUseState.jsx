import { useState } from "react";

// function LearningUseState(){
//     // const [returnedData,returnedfunction]=useState("manish")  
//     // console.log(returnedData,returnedfunction)
//    const [counter,setCounter]= useState(0)
//     // let counter=0
//     function increaseCounter(){
      
//        setCounter(counter+1)
//     }

//     function decreasecounter(){
//         if (counter>=1){
//        setCounter(counter-1)
//         }
//         else{
//             setCounter(0)
//         }
//     }

//     function resetcounter(){
//         setCounter(0)
//     }
//     return(
//         <>
//         <h1>{counter}</h1>
//         <button onClick={increaseCounter} className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">+</button>
//         <button onClick={decreasecounter} className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400">-</button>
//         <button onClick={resetcounter} className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-yellow-600 bg-yellow-500 hover:bg-yellow-400">Reset the counter </button>
//         </>
//     )
// }

// export default LearningUseState


// function LearningUseState()
// {
//     const [count,setCount]=useState(0);

//    function increaseCounter(){
      
//         setCount(count+1)
//      }
//     return(
//         <>
//         <h1>You have clicked {count} times!</h1>
//          <button onClick={increaseCounter} className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-yellow-600 bg-yellow-500 hover:bg-yellow-400">Click Me</button>
//         </>

//     )
// }

function LearningUseState()
{
    const [darkMode,setDarkMode]= useState(false)

   return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-black"
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p className="text-lg">
        This is {darkMode ? 'Dark' : 'Light'} Mode.
      </p>
    </div>
  );
}

export default LearningUseState
