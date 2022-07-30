export interface AdvertisementPlan {
  id: number;
  title: string;
  autoNardebanFromHours: number;
  pinInAllAdvertisementsFromHours: number;
  pinInHomePageFromHours: number;
  sendEmail: boolean;
  sendSms: boolean;
  nardeban: string;
  totalAdvertisementDay: number;
  pictureCount: number;
  hamCarBadge: boolean;
  showVisitReport: boolean;
  showInSpecial: boolean;
  price: number;
  discount: number;
  totalPrice: number;
}
