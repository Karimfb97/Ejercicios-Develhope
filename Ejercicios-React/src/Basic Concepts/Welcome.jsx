import Age from "./Age";

/* eslint-disable react/prop-types */
export default function Welcome({ name="John", age=29 }) {

    return (
    <>
    <p>Welcome, {name}!</p>
    <Age age={age} />
    {age>=18 && <Age age={age} />}
    {age && <Age age={age} />}
    {age>=18 && age<65 && <Age age={age} />}
    {age>=18 && age<65 && name==="John"&& <Age age={age} />}
    </>
    )
}