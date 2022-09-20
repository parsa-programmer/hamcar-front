import lodash from "lodash";
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
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  return filteredArr;
}

export const ImageDimensions = (file) =>
  new Promise((resolve, reject) => {
    const img = new Image();

    // the following handler will fire after a successful loading of the image
    img.onload = () => {
      const { naturalWidth: width, naturalHeight: height } = img;
      resolve({ width, height });
    };

    // and this handler will fire if there was an error with the image (like if it's not really an image or a corrupted one)
    img.onerror = () => {
      reject("There was some problem with the image.");
    };

    img.src = URL.createObjectURL(file);
  });

  export function getPaginatedItems(items, page, pageSize) {
    var pg = page || 1,
      pgSize = pageSize || 100,
      offset = (pg - 1) * pgSize,
      pagedItems = lodash.drop(items, offset).slice(0, pgSize);
    return {
      page: pg,
      pageSize: pgSize,
      total: items.length,
      total_pages: Math.ceil(items.length / pgSize),
      data: pagedItems
    };
  }
