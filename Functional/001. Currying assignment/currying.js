const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const greeting = [
  'Nice Job',
  'Excellent Job',
  'Well done',
  'What happened',
  'Not good',
]; 

function greet(greeting) {
  return function(student) {
    const {name, grade} = student;
    return `${greeting} ${name}, you got an ${grade}`
  }
}

const result = studentGrades.map((student, i) => {
  return greet(greeting[i])(student);
});

console.log(result);