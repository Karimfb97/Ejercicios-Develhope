function printAsyncName(cb, name) {

    setTimeout(cb, 1000);
    setTimeout(()=>console.log(name), 2000);

    // const helloInterval = setInterval(cb, 1000);
    // const nameInterval = setInterval(()=>console.log(name), 2000);
    // setTimeout(()=>clearInterval(helloInterval), 1000);
    // setTimeout(()=>clearInterval(nameInterval), 2000);
}

function printHello() {

    console.log("Hello");
}

printAsyncName(printHello, "Carlos");