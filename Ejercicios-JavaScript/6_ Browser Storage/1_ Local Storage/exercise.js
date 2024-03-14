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

// localStore(user);
