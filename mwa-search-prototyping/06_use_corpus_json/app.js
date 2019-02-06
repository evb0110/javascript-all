// const parsedData = JSON.parse(data)

console.log(data);
document.querySelector('.root').innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';