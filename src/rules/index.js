export const getAlertByLessThanZero = (value) => {
  if (value < 0) return "red";

  return;
};

export const getAlertByLessThanOrEqualZero = (value) => {
  if (value < 0) return "red";

  return;
};

export const getFeaturedByLowerButPositive = (list, value) => {
  const filteredList = list.filter((elem) => elem >= 0);
  const minValue = Math.min(...filteredList);
  console.log(list, filteredList, value, minValue, minValue === value);

  return minValue === value;
};

export const getFeaturedByHigherValue = (list, value) => {
  const maxValue = Math.max(...list);
  return maxValue === value;
};
