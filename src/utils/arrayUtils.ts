export const addAllNumbers = (array: number[]): number => {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};
