export const parseToFloat = (str) => {
  const fixedNumberStr = Number.parseFloat(str).toFixed(2);
  return Number.parseFloat(fixedNumberStr);
}