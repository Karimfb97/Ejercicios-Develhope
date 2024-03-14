import { useEffect, useState } from "react"
import CounterDisplay from "./CounterDisplay"

/* eslint-disable react/prop-types */
export default function Counter({ initialValue=0, inc=1 }) {

    const [count, setCount] = useState(initialValue)

    function handleInc() {
        setCount(c => c + inc)
    }
    function handleDec() {
        setCount(c => c - inc)
    }
    function handleReset() {
        setCount(initialValue)
    }

    useEffect(() => console.log(`The counter amount is ${count}.`), [count])

    return (
    <>
    <CounterDisplay count={count} />
    <button onClick={handleInc}>+</button>
    <button onClick={handleDec}>-</button>
    <button onClick={handleReset}>R</button>
    </>
    )
}