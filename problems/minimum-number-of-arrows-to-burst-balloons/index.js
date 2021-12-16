const minimumNumberOfArrowsToBurstBalloons = (points) => {
  if (points.length === 0) return 0;
  const sorted = points.sort(([, a], [, b]) => {
    if (a < b) return -1;
    return 1;
  });
  let arrows = 1;
  let maxStart = points[0][1];
  sorted.forEach(([nextStart, nextEnd]) => {
    if (maxStart < nextStart) {
      arrows += 1;
      maxStart = nextEnd;
    }
  });
  return arrows;
};
minimumNumberOfArrowsToBurstBalloons.runtime = 38.55;
minimumNumberOfArrowsToBurstBalloons.memory = 38.55;
minimumNumberOfArrowsToBurstBalloons.problemURL = 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/';
minimumNumberOfArrowsToBurstBalloons.dateCompleted = new Date('05/09/2019');

module.exports = minimumNumberOfArrowsToBurstBalloons;
