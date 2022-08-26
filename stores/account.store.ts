import { defineStore } from "pinia";
import {
  UserAdvertisementSavedDto,
  UserDto,
} from "~~/models/account/account.Models";
import { GetAdvertisementType } from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementType } from "~~/models/advertisements/enums/AdvertisementType";
import {
  GetNardebanCount,
  GetSavedAdvertisements,
} from "~~/services/account.service";
import { GetAdvertCount } from "~~/services/advertisement.service";
import { GetNotifies } from "~~/services/notify.service";

const defaultState = () => ({
  user: {} as UserDto,
  advertSaved: [] as UserAdvertisementSavedDto[],
  nardebans: 0 as number,
  carAdverts: 0 as number,
  motorAdverts: 0 as number,
  gooshBeZangs: 0 as number,
  loading: true as boolean,
});

export const useAccountStore = defineStore("account", {
  state: defaultState,
  actions: {
    deleteSavedItem(id: string) {
      this.advertSaved = this.advertSaved.filter((f) => f.id != id);
    },
    deleteAllSavedItem() {
      this.advertSaved = []
    },
    async initData() {
      var carCount = await GetAdvertCount(
        GetAdvertisementType.All,
        AdvertisementType.car
      );
      var motorCount = await GetAdvertCount(
        GetAdvertisementType.All,
        AdvertisementType.motorCycle
      );
      var nardebans = await GetNardebanCount();
      var gooshBezangs = await GetNotifies({
        pageId: 1,
        take: 1,
      });
      var saved = await GetSavedAdvertisements();

      this.carAdverts = carCount.data ?? 0;
      this.motorAdverts = motorCount.data ?? 0;
      this.nardebans = nardebans.data ?? 0;
      this.gooshBeZangs = gooshBezangs.data?.entityCount ?? 0;
      this.advertSaved = saved.data ?? [];
      this.loading = false;
    },
  },
});
