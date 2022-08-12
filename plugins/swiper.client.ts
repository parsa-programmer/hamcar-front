import { Pagination, Navigation,Autoplay } from "swiper";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default defineNuxtPlugin((nuxtApp: any) => {
  SwiperCore.use([Pagination, Navigation,Autoplay]);
});
