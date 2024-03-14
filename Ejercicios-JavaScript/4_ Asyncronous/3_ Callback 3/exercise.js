function repeatHello(cb, n) {

    const helloInterval = setInterval(cb, 1000);
    setTimeout(()=>clearInterval(helloInterval), n*1010);
}

function printHello() {

    console.log("Hello");
}

repeatHello(printHello, 5);
