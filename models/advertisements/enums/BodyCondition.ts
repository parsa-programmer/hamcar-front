import { SelectData } from "~~/models/utilities/SelectData";

export enum BodyCondition {
  بدونه_رنگ,
  صافکاری_بدونه_رنگ,
  یک_لکه_رنگ,
  دو_لکه_رنگ,
  چند_لکه_رنگ,
  گلگیر_رنگ,
  گلگیر_تعویض,
  یک_درب_رنگ,
  دو_درب_رنگ,
  درب_تعویض,
  کاپوت_رنگ,
  کاپوت_تعویض,
  دوره_رنگ,
  کامل_رنگ,
  تصادفی,
  سوخته,
  اتاق_تعویض,
  اوراقی,
}
export const GenerateBodyConditionSelectData = (): SelectData[] => {
  let models = [] as SelectData[];

  for (let i = 0; i < Object.keys(BodyCondition).length; i++) {
    if (BodyCondition[i] == undefined) continue;
    models.push({
      label: BodyCondition[i],
      value: BodyCondition[i],
    });
  }
  models.map((f) => (f.label = f.label.replace("_", " ").replace("_", " ")));
  return models;
};
