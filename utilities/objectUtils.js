export const RemoveEmptyProps = (object) => {
  for (const key in object) {
    //@ts-ignore
    if (object[key] == "" || object[key] == null) {
      //@ts-ignore
      delete object[key];
    }
  }
};
export function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
}

export function RemoveDubplicateObjects(list) {
  const filteredArr = list.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  return filteredArr;
}
