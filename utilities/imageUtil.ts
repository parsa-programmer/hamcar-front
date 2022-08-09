export const GetBrandImage = (imageName: string): string => {
  return `hamcar/images/brandModule/${imageName}`;
};
export const GetModelImage = (imageName: string): string => {
  return `hamcar/images/brandModule/models/${imageName}`;
};
export const GetCarReviewImage = (imageName: string): string => {
  return `hamcar/images/carReview/${imageName}`;
};

export const GetBitMapAdvertImage = (
  advertId: string | undefined,
  imageName: string
): string => {
  return `hamcar/images/ads/${advertId}/bitMaps/${imageName}`;
};
export const GetAdvertImage = (advertId: string, imageName: string): string => {
  return `hamcar/images/ads/${advertId}/${imageName}`;
};
