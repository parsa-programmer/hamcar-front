export function padTo2Digits(num: number) {
  return num.toString().padStart(2, "00");
}

export function convertMsToMinutesSeconds(milliseconds: number) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.round((milliseconds % 60000) / 1000);

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}
export function splitNumber(value: number | string) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
