
async function toDoRequest() {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
}

toDoRequest();