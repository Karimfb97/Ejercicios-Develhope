import { useState } from "react";
import Welcome from "../Basic Concepts/Welcome";

export default function InteractiveWelcome() {

    const [name, setName] = useState("")

    function handleInput(event) {

        setName(event.target.value)
    }

    return (
        <>
        <input name={name} onChange={handleInput} ></input>
        <Welcome name={name} />
        </>
    )
}