let manager = {
  office: `Dubai`,
  dept: `Sales`,
  employees: 0
};

let handlers = {
  set: (target, propName, newValue) => {
    if (propName === `employees`
       && !Array.isArray(newValue) 
       && typeof newValue !== `string` 
       && newValue !== null) {
        return
      };
      target[propName] = newValue;
    target[propName] = newValue;
  }
}

manager = new Proxy(manager, handlers);

console.log(1, manager);
manager.office = `London` //updates
console.log(2, manager);
manager.employees = [`Jim`, `Patrick`, `Marie`] //updates
console.log(3, manager);
manager.employees = 3 // does not update
console.log(4, manager);
manager.employees = null //updates
console.log(manager);
manager.employees = {
  name: `Jim`
} //does not update
console.log(manager);