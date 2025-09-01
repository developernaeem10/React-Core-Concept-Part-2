import { useState } from "react"

export default function Counter () {

    const [count, setRuns] = useState(0)
    const handleRuns = () => {
        const setCount = count + 1
        setRuns(setCount)
    }

    const counterStyle = {
        border : "2px solid yellow"
    }
    return (
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={handleRuns}>Add </button>
        </div>
    )
}