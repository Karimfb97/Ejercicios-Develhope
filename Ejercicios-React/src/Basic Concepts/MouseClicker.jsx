export default function MouseClicker() {

    function handleConsoleLog(event) {
        console.log(event.target.name)
    }

    function handleImgSrc(event) {
        event.stopPropagation()
        console.log(event.target.src)
    }

    return (
        <>
        <button name="one" onClick={handleConsoleLog} >
            <img src="src/img/Akali _kda.webp" onClick={handleImgSrc} style={{width:'100px', height:'60px'}} />
            One
        </button>
        </>
    )
}