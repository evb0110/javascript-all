const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(s => +s);

const [[n, k], queen, ...obstacles] = lines.map(lineToNumbers);
// n == board size
// k == number of obstacles

// ==========================================
function inside(r, c, n) {
  return r > 0 && r <= n && c > 0 && c <= n;
}

function calculateUnderAttack(rq, cq, n, obstaclesString) {
  const obstaclesSet = new Set(obstaclesString);
  const ll = [];  // left from the queen
  const lu = [];  // left up
  const uu = [];  // up
  const ru = [];  // right up
  const rr = [];  // right
  const rd = [];  // right down
  const dd = [];  // down
  const ld = [];  // left down
  for (let c = cq - 1; c >= 1; c--) {
    let r = rq;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    ll.push(square);
  }
  for (let c = cq - 1; c >= 1; c--) {
    let r = rq + cq - c;
    if (!inside(r, c, n)) break;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    lu.push(square);
  }
  for (let r = rq + 1; r <= n; r++) {
    let c = cq;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    uu.push(square);
  }
  for (let r = rq + 1; r <= n; r++) {
    let c = cq + r - rq;
    if (!inside(r, c, n)) break;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    ru.push(square);
  }
  for (let c = cq + 1; c <= n; c++) {
    let r = rq;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    rr.push(square);
  }
  for (let c = cq + 1; c <= n; c++) {
    let r = rq - c + cq;
    if (!inside(r, c, n)) break;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    rd.push(square);
  }
  for (let r = rq - 1; r >= 1; r--) {
    let c = cq;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    dd.push(square);
  }
  for (let r = rq - 1; r >= 1; r--) {
    let c = cq + r - rq;
    if (!inside(r, c, n)) break;
    let square = [r, c].toString();
    if (obstaclesSet.has(square)) break;
    ld.push(square);
  }
  return [ll, lu, uu, ru, rr, rd, dd, ld];
}

function queensAttack(n, _, rq, cq, obstacles) {
  const obstaclesStrings = obstacles.map(el => el.toString());
  const underAttack = calculateUnderAttack(rq, cq, n, obstaclesStrings);
  const underAttackFlat = underAttack.reduce((acc, el) => [...acc, ...el]);
  return underAttackFlat.length;
}
// ==========================================

console.log(queensAttack(n, k, ...queen, obstacles));
