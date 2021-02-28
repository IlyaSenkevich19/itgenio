import { task } from "./module_tasks/task1";
import { task2 } from "./module_tasks/task2";
import { ArrayCalc } from "./module_tasks/task4";
import { task5 } from "./module_tasks/task5";

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => task());

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => task2());

//Третье задание
const but1 = document.querySelector(".first-btn");
but1.addEventListener("click", () => alert("Я умею обрабатывать события!"));

const but2 = document.querySelector(".second-btn");
but2.addEventListener("click", () => {
  const back = document.querySelector("body");
  if (!back.classList.contains("background")) {
    back.classList.add("background");
  }
});

const but3 = document.querySelector(".third-btn");
but3.addEventListener("click", () => {
  const back = document.querySelector("body");
  if (back.classList.contains("background")) {
    back.classList.remove("background");
  }
});

const image = document.querySelector(".image");
image.addEventListener("click", () => {
  image.width += 5;
  image.height += 5;
});

const inputArr = document.querySelector(".input-arr");
const btnResult1 = document.querySelector(".btnResult1");
const btnResult2 = document.querySelector(".btnResult2");
const btnResult3 = document.querySelector(".btnResult3");
const btnResult4 = document.querySelector(".btnResult4");
const btnResult5 = document.querySelector(".btnResult5");
const btnResult6 = document.querySelector(".btnResult6");

const newCalc = ArrayCalc();

btnResult1.addEventListener("click", () => {
  const { value } = inputArr;
  alert(newCalc.creatingArr(value));
});

btnResult2.addEventListener("click", () => {
  const { value } = inputArr;
  alert(newCalc.arrayWithSpaces(value));
});

btnResult3.addEventListener("click", () => {
  const { value } = inputArr;
  alert(newCalc.addNewElement(value));
});

btnResult4.addEventListener("click", () => {
  const { value } = inputArr;
  alert(newCalc.removeElement(value));
});

btnResult5.addEventListener("click", () => {
  const { value } = inputArr;
  alert(newCalc.summary(value));
});

btnResult6.addEventListener("click", () => {
  const { value } = inputArr;
  alert(newCalc.sortArr(value));
});

// Пятое задание
const firstRound = document.querySelector(".first-round");
const secondRound = document.querySelector(".second-round");
const thirdRound = document.querySelector(".third-round");
const scoreForFinal = document.querySelector(".final-round");

const submitBtn = document.querySelector(".submit");
const summaryBtn = document.querySelector(".summary-score");
const finalBtn = document.querySelector(".final-btn");

submitBtn.addEventListener("click", () => {
  const score1 = firstRound.value;
  const score2 = secondRound.value;
  const score3 = thirdRound.value;
  const forFinal = +scoreForFinal.value;
  const { round1, round2, round3 } = task5(
    score1,
    score2,
    score3,
    forFinal
  ).contest;
  const res = `Первый тур: ${round1}; Второй тур: ${round2}; Третий тур: ${round3};`;
  alert(res);
});

summaryBtn.addEventListener("click", () => {
  const score1 = firstRound.value;
  const score2 = secondRound.value;
  const score3 = thirdRound.value;
  const forFinal = +scoreForFinal.value;
  const { summary, average } = task5(score1, score2, score3, forFinal);
  const res = `Сумма баллов за три тура: ${summary}; Среднее арифмет.: ${average};`;
  alert(res);
});

finalBtn.addEventListener("click", () => {
  const score1 = firstRound.value;
  const score2 = secondRound.value;
  const score3 = thirdRound.value;
  const forFinal = +scoreForFinal.value;
  const final = task5(score1, score2, score3, forFinal).final;
  alert(final);
});
