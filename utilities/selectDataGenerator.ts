import { SelectData } from "~~/models/utilities/SelectData";

export const GenerateTedadeGhest = (): SelectData[] => {
  let data: SelectData[] = [];
  for (let i = 1; i <= 60; i++) {
    data.push({
      value: i,
      label: `${i} `,
    });
  }
  return data;
};
export const GenerateYear = (start: number, end: number): SelectData[] => {
  const years: SelectData[] = [];
  for (let i = end; i >= start; i--) {
    years.push({
      label: `${i} - ${i + 621}`,
      value: i,
    });
  }
 
  return years;
};
