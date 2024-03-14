const isLogged = true;

function userLogged(isLogged) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (isLogged) {
                resolve(Math.random())
            } else {
                reject(new Error("Usuario sin registrar."))
            }
        }, 1000);
    })
}

function user(num) {

    return new Promise((resolve, reject) => {
        
        if (num > 0.5) {
            resolve({name: "Carlos", age: 26})
        } else {
            reject(new Error("Numero inferior a 0.5."))
        }
    })
}

userLogged(isLogged)
    .then(user)
    .then((userData)=> console.log(userData))
    .catch((err)=> console.error(err));

setTimeout(()=> {
    console.log("Fin")
}, 2000);