function repeatHello(cb, n) {

    setInterval(cb, 1000);
}

function printHello() {

    console.log("Hello");
}

repeatHello(printHello);