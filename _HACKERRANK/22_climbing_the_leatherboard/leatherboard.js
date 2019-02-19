const fs = require('fs');

const lines = fs.readFileSync('input_large.txt', 'utf8').split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));
const scores = lineToNumbers(lines[1]);
const alice = lineToNumbers(lines[3]);

function climbingLeaderboard(scores, alice) {
  const scoresUnique = [...new Set(scores)];
  const aliceReversed = alice.reverse();
  const acc = [];
  let placesReversed = aliceReversed.reduce((_, el) => {
    const currentPlace = acc[acc.length - 1] || 1;
    for (let i = currentPlace - 1; i < scoresUnique.length; i++) {
      if (el >= scoresUnique[i]) acc.push(i + 1);
    }
    acc.push(scoresUnique.length + 1);
  }, []);
  placesReversed = acc;
  return placesReversed.reverse();
}



console.log(climbingLeaderboard(scores, alice));