import { SelectData } from "~~/models/utilities/SelectData";

export enum Color {
  سفید,
  مشکی,
  خاکستری,
  نقره_ای,
  سفید_صدفی,
  نوک_مدادی,
  آبی,
  قهوه_ای,
  قرمز,
  سرمه_ای,
  سریی,
  تیتانیوم,
  یشمی,
  زرد,
  آلبالویی,
  کربن_بلک,
  بادمجانی,
  مسی,
  سبز,
  دلفینی,
  ذغالی,
  نقرآبی,
  کرم,
  زیتونی,
  نارنجی,
  طوسی,
  اطلسی,
  طلائی,
  زرشکی,
  گیلاسی,
  عنابی,
  بنفش,
  خاکی,
  پوست_پیازی,
  موکا,
  برنز,
}
export const GenerateColorSelectData = (): SelectData[] => {
  let colors = [] as SelectData[];

  for (let i = 0; i < Object.keys(Color).length; i++) {
    if (Color[i] == undefined) continue;
    colors.push({
      label: Color[i],
      value: Color[i],
    });
  }
  colors.map(f=>f.label=f.label.replace("_"," "));
  return colors;
};
