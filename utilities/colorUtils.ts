import { Color } from "~~/models/advertisements/enums/Color";

export const ConvertColorNameToHashColor = (name: Color | string) => {
  switch (name) {
    case Color.آبی:
      return "blue";
    case Color.آلبالویی:
      return "rgb(178, 0, 57)";
    case Color.اطلسی:
      return "rgb(83, 133, 163)";
    case Color.بادمجانی:
      return "rgb(84, 0, 65)";
    case Color.برنز:
      return "rgb(207, 177, 124)";
    case Color.بنفش:
      return "rgb(116, 28, 174)";
    case Color.تیتانیوم:
      return "rgb(178, 178, 178)";
    case Color.خاکستری:
      return "gray";
    case Color.دلفینی:
      return "rgb(164, 172, 177)";
    case Color.ذغالی:
      return "rgb(38, 41, 42)";
    case Color.زرد:
      return "yellow";
    case Color.زرشکی:
      return "#A62B26";
    case Color.زیتونی:
      return "#9D8A28";
    case Color.سبز:
      return "green";
    case Color.سرمه_ای:
      return "#0F3761";
    case Color.سریی:
      return "#6F7A98";
    case Color.سفید:
      return "white";
    case Color.سفید_صدفی:
      return "#FFF6F6";
    case Color.طلائی:
      return "#DEA551";
    case Color.طوسی:
      return "#9D9D9C";
    case Color.عنابی:
      return "#701009";
    case Color.قرمز:
      return "red";
    case Color.قهوه_ای:
      return "#701009";
    case Color.مسی:
      return "#EE5209";
    case Color.مشکی:
      return "black";
    case Color.موکا:
      return "#AF8971";
    case Color.نارنجی:
      return "orange";
    case Color.نقرآبی:
      return "#CACACA";
    case Color.نقره_ای:
      return "#CACACA";
    case Color.نوک_مدادی:
      return "#494B4A";
    case Color.پوست_پیازی:
      return "#743954";
    case Color.کربن_بلک:
      return "#575756";
    case Color.کرم:
      return "#DFD399";
    case Color.گیلاسی:
      return "#B02D5A";
    case Color.یشمی:
      return "#468565";
  }
  return "black";
};
