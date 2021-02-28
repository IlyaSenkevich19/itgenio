export const ArrayCalc = () => {
  const creatingArr = (arr) => {
    const newArr = arr
      .replace(/[^0-9%^*\/()\-+.]/g, "")
      .split("")
      .map((el) => Number(el));
    return newArr;
  };

  const arrayWithSpaces = (arr) => {
    const newArr = creatingArr(arr);
    const res = newArr.join(" ");
    return res;
  };

  const addNewElement = (arr) => {
    const newArr = creatingArr(arr);
    const randomNumber = Math.floor(Math.random() * Math.floor(100));
    newArr.push(randomNumber);
    return newArr;
  };

  const removeElement = (arr) => {
    const newArr = creatingArr(arr);
    newArr.pop();
    return newArr;
  };

  const summary = (arr) => {
    const newArr = creatingArr(arr);
    const sum = newArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sum;
  };

  const sortArr = (arr) => {
    const newArr = creatingArr(arr);
    newArr.sort((a, b) => a - b);
    return newArr;
  };

  return {
    creatingArr,
    arrayWithSpaces,
    addNewElement,
    removeElement,
    summary,
    sortArr,
  };
};
