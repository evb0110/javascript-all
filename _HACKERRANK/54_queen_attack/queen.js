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

function calculateUnderAttack([rq, cq], n, obstaclesS) {
  const obstaclesSet = new Set(obstaclesS);
  const ll = [];
  const lu = [];
  const uu = [];
  const ru = [];
  const rr = [];
  const rd = [];
  const dd = [];
  const ld = [];
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
  const result = [ll, lu, uu, ru, rr, rd, dd, ld];
  return result;
}

function queensAttack(n, _, rq, cq, obstacles) {
  const obstaclesS = obstacles.map(el => el.toString());
  const underAttack = calculateUnderAttack([rq, cq], n, obstaclesS);
  const underAttackFlat = underAttack.reduce((acc, el) => [...acc, ...el]);
  return underAttackFlat.length;
}
// ==========================================

console.log(queensAttack(n, k, ...queen, obstacles));
