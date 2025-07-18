import { useState } from "react";

function LearningUseState(){
    // const [returnedData,returnedfunction]=useState("manish")  
    // console.log(returnedData,returnedfunction)
   const [counter,setCounter]= useState(0)
    // let counter=0
    function increaseCounter(){
      
       setCounter(counter+1)
    }

    function decreasecounter(){
        if (counter>=1){
       setCounter(counter-1)
        }
        else{
            setCounter(0)
        }
    }

    function resetcounter(){
        setCounter(0)
    }
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={increaseCounter} className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">+</button>
        <button onClick={decreasecounter} className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400">-</button>
        <button onClick={resetcounter} className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-yellow-600 bg-yellow-500 hover:bg-yellow-400">Reset</button>
        </>
    )
}

export default LearningUseState