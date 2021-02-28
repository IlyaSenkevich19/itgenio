export const task5 = (score1, score2, score3, scoreForFinal) => {
  const contest = {};
  contest.round1 = +score1;
  contest.round2 = +score2;
  contest.round3 = +score3;

  const summary = Object.values(contest).reduce((a, b) => a + b);
  const average = (summary / Object.values(contest).length).toFixed(2);

  const final =
    summary >= scoreForFinal
      ? "Ты в финале"
      : "У тебя недостаточно баллов для финала";

  return {
    contest,
    summary,
    average,
    final,
  };
};
