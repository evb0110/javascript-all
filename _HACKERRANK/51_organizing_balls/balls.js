const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\n/);

const lineToNumber = line => line.split(/\s+/).map(s => +s);

const inputN = lines.map(lineToNumber);

function getQueries(inputN) {
  const data = [...inputN];
  const q = data.shift()[0];
  const queries = [];
  for (let i = 0; i < q; i++) {
    queries[i] = [];
    const n = data.shift()[0];
    for (let j = 0; j < n; j++) {
      queries[i].push(data.shift());
    }
  }
  return queries;
}

// ==============================
function countainerCount(container) {
  return container.map(arr => arr.reduce((a, b) => a + b, 0));
}

function ballCount(container) {
  const n = container.length;
  const result = []
  for (let j = 0; j < n; j++) {
    result[j] = container.reduce((acc, el) => acc + el[j], 0)
  }
  return result;
}

function organizingContainers(container) {
  const currentContainerCount = countainerCount(container).sort().toString();
  const currentBallCount = ballCount(container).sort().toString();
  if (currentContainerCount == currentBallCount) {
    return 'Possible';
  }
  return 'Impossible'
}
// ==============================


const queries = getQueries(inputN);

for (container of queries) {
  console.log(organizingContainers(container))
}
