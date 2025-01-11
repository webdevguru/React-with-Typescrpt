



import { useEffect, useState } from "react";

const Apiget=()=>{
    const [count,setCount]=useState<number>(1);
    const [count1,setCount1]=useState<number>(1);
    useEffect(()=>{
        console.log("useEffect Called")
    })//dependency array parameter
    const increment=()=>{
        setCount(count+1);
    }
    const increment1=()=>{
        setCount1(count1+1);
    }
    return(
        <>
        <h2>Count is  : {count}</h2>
           <button onClick={increment} className="btn btn-success">Increment</button>
           <h2>Count 1 is :{count1}</h2>
           <button onClick={increment1} className="btn btn-success">Increment1</button>
        </>
    )
}
export default Apiget;
//   useEffect Hooks point to be noted
//   =================================
//Notes:  seen1:  useEffect(()=>{
    // console.log("useEffect Called")   =>useeffect hooks called for the time while component will be  rendered for first time
                                        //  =>When state will update the useeffect hooks called autometically
// })



// seen2:  useEffect(()=>{
//     console.log("useEffect Called")
// },[])=>=>useeffect hooks called for the time while component will be  rendered for first time
// =>When state will update the useeffect hooks not called autometically.



// seen3:  useEffect(()=>{
//     console.log("useEffect Called")
// },[value]) =>useeffect hooks called for the time while component will be  rendered for first time
// =>When state will update the useeffect hooks  called autometically with given state update only.
