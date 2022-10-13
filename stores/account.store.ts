import { defineStore } from "pinia";
import {
  UserAdvertisementSavedDto,
  UserDto,
} from "~~/models/account/account.Models";
import { GetAdvertisementType } from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementType } from "~~/models/advertisements/enums/AdvertisementType";
import { ConsultantDto } from "~~/models/exhibitions/Exhibition.Commands";
import { ExhibitionDto } from "~~/models/exhibitions/Exhibition.Models";
import {
  GetNardebanCount,
  GetSavedAdvertisements,
} from "~~/services/account.service";
import { GetAdvertCount } from "~~/services/advertisement.service";
import { GetCurrentExhibition } from "~~/services/exhibition.service";
import { GetNotifies } from "~~/services/notify.service";

const defaultState = () => ({
  user: {} as UserDto,
  exhibition: {} as ExhibitionDto,
  consultant: {} as ConsultantDto,
  advertSaved: [] as UserAdvertisementSavedDto[],
  nardebans: 0 as number,
  carAdverts: 0 as number,
  motorAdverts: 0 as number,
  gooshBeZangs: 0 as number,
  loading: true as boolean,
  isInited: false,
});

export const useAccountStore = defineStore("account", {
  state: defaultState,
  actions: {
    deleteSavedItem(id: string) {
      this.advertSaved = this.advertSaved.filter((f) => f.id != id);
    },
    deleteAllSavedItem() {
      this.advertSaved = [];
    },
    async initData() {
      this.loading = true;
      var result = await Promise.all([
        GetSavedAdvertisements(),
        GetNotifies({
          pageId: 1,
          take: 1,
        }),
        GetNardebanCount(),
        GetAdvertCount(GetAdvertisementType.All, AdvertisementType.motorCycle, {
          setCurrentUserId: true,
          exhibitionId: null,
          model: null,
          modelType: null,
        }),
        GetAdvertCount(GetAdvertisementType.All, AdvertisementType.car, {
          setCurrentUserId: true,
          exhibitionId: null,
          model: null,
          modelType: null,
        }),
        GetCurrentExhibition(),
      ]);
      this.loading = false;
      this.isInited = true;

      var saved = result[0];
      var gooshBezangs = result[1];
      var nardebans = result[2];
      var motorCount = result[3];
      var carCount = result[4];
      var exhibition = result[5];

      this.carAdverts = carCount.data ?? 0;
      this.motorAdverts = motorCount.data ?? 0;
      this.nardebans = nardebans.data ?? 0;
      this.gooshBeZangs = gooshBezangs.data?.entityCount ?? 0;
      this.advertSaved = saved.data ?? [];
      this.exhibition = exhibition.data!;
    },
    clearData() {
      this.user = {} as UserDto;
      this.exhibition = {} as ExhibitionDto;
      this.consultant = {} as ConsultantDto;
      this.advertSaved = [] as UserAdvertisementSavedDto[];
    },
  },
});
