function gradingStudents(grades) {
  const result = grades.map((el) => {
    if (el < 38) {
      return el;
    }
    if (el % 5 > 2) {return Math.round(el / 5) * 5;}
    return el;
  });
  return result;
}

console.log(gradingStudents([73,67,38,33]));