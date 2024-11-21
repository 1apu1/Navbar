import { useState } from "react"

function Counter() {
    let[count,setCount]=useState(0)
    const increaseCount=()=>{
        setCount(count+1)
        if(count>=10){
            alert("count is high")
        }
    }
    [count,setCount]=useState(count)
    const DecreaseCount=()=>{
        setCount(count-1)
        if(count<=-10){
            alert("count very low")
        }
    }
    return (
        <>
            <div className="w-25 m-auto text-center">
                <h1 className="text-center">Counter</h1>
                <h2 className="boreder shadow">{count}</h2>
                <div>
                    <div className="btn btn-sm btn-outline-danger mx-3" onClick={DecreaseCount}>Decrement</div>
                    <div className="btn btn-sm btn-outline-secondary" onClick={increaseCount}>Increment</div>
                    <p>{count}</p>
                </div>
            </div>
        </>
    )    
}
export default Counter;
