export const IsImageFile = (imageName: string): boolean => {
  return (
    imageName.endsWith(".png") ||
    imageName.endsWith(".jpg") ||
    imageName.endsWith(".jpeg")
  );
};

export const getFileType = (file: string): string => {
  var items = file.split(".");
  return file[items.length - 1];
};
