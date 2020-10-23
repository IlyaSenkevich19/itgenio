const km = 1000;
const sm = 100000;

const getPromptMeters = () => {
  return +prompt("Введите расстояние в километрах");
};

const getAlertsResults = (meters) => {
  alert(`${meters * km} метров`);
  alert(`${meters * sm} сантиметров`);
};

export const task = () => {
  const meters = getPromptMeters();
  while (isNaN(meters)) {
    alert("Введите число");
    const meters = getPromptMeters();
    if (!isNaN(meters)) {
      getAlertsResults(meters);
      return;
    }
  }
  if (!isNaN(meters)) {
    getAlertsResults(meters);
  }
};
