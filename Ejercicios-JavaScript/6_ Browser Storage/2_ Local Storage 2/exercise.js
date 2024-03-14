const user = {
  id: 1,
  name: "John",
  age: 25,
};

function localStore(obj) {
  const key = obj.id;
  const value = JSON.stringify(user);
  localStorage.setItem(key, value);
};

function localRecover(id) {
  const u = localStorage.getItem(id);
  console.log(u);
  return JSON.parse(u);
}


// localStore(user);

const idSearched = user.id;
console.log(localRecover(idSearched));