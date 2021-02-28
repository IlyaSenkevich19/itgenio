const meters = 1000;
const centimeters = 100000;

const getPromptKm = () => {
  return +prompt("Введите расстояние в километрах");
};

const getAlertsResults = (km) => {
  alert(`${km * meters} метров`);
  alert(`${km * centimeters} сантиметров`);
};

export const task = () => {
  const km = getPromptKm();
  while (isNaN(km)) {
    alert("Введите число");
    const km = getPromptKm();
    if (!isNaN(km)) {
      getAlertsResults(km);
      return;
    }
  }
  if (!isNaN(km)) {
    getAlertsResults(km);
  }
};
