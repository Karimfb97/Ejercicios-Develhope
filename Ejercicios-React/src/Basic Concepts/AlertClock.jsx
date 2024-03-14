export default function AlertClock() {

    function handleClockAlert() {
        const date = new Date()
        alert(`Actual date: ${date.toLocaleTimeString()}`)
    }
 
    return <button onClick={handleClockAlert}>Click to get the hour</button>
}