/* eslint-disable react/prop-types */
import { useState } from "react"

export default function Login({ onLogin = state => {console.log(state)}}) {

    const [data, setData] = useState(createInitialData())

    function handleInput(event) {

        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return {
            ...d,
            [name]: type==="checkbox" ? checked : value,
            }
        })
    }

    function handleLogin(event) {
        event.preventDefault()
        onLogin(data)
    }

    function handleReset() {
        setData(createInitialData())
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" name="username" value={data.username} onChange={handleInput}></input>
            <input type="password" name="password" value={data.password} onChange={handleInput} ></input>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInput} ></input>
            <button type="button" onClick={handleReset} >Reset</button>
            <pre>{JSON.stringify(data)}</pre>
            <button disabled={!data.username || !data.password ? true : false } >Login</button>
        </form>
    )
}

function createInitialData() {
    return {
        username: "",
        password: "",
        remember: false
    }
}