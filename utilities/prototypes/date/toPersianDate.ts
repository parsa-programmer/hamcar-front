interface Date {
  toPersianDate(): string;
}

Date.prototype.toPersianDate = function (): string {
  return "test";
};
