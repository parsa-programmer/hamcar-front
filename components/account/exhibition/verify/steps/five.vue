<template>
  <div class="row main__row">
    <div class="right">
      <div class="mb-2 address">
        <label class="label"
          >آدرس نمایشگاه <span class="color-error">*</span></label
        >
        <h-input
          :transparent="false"
          name="address"
          placeholder="مثال: تهران، خیابان آرژانتین، کوچه فلان"
          v-model="registerData.stepFive.address"
          class="input"
        />
      </div>
      <div class="mb-2">
        <label class="label">
          تلفن های ثابت <span class="color-error">*</span></label
        >
        <div
          class="
            row
            justify-content-space-between
            align-items-center
            mb-1_5
            phones
          "
        >
          <h-input
            :transparent="false"
            name="phneOne"
            placeholder="02124653986"
            v-model="registerData.stepFive.phoneNumberOne"
            :ignore-error-message="true"
            number
            class="input"
            maxlength="11"
          />
          <div
            class="row justify-content-space-between align-items-center actions"
          >
            <icons-close style="opacity: 0" hash-color="var(--color-error)" />

            <span class="pluse" @click="count = 2">
              <icons-pluse />
            </span>
          </div>
        </div>
        <div
          class="
            row
            justify-content-space-between
            align-items-center
            mb-1_5
            phones
          "
          v-show="count >= 2"
        >
          <h-input
            :transparent="false"
            name="phoneNumber2"
            placeholder="02124653986"
            v-model="registerData.stepFive.phoneNumberTwo"
            :ignore-error-message="true"
            number
            maxlength="11"
            class="input"
          />
          <div
            class="row justify-content-space-between align-items-center actions"
          >
            <icons-close
              hash-color="var(--color-error)"
              :width="12"
              :height="12"
              @click="deletePhoneTwo"
            />

            <span class="pluse" @click="count = 3">
              <icons-pluse />
            </span>
          </div>
        </div>
        <div
          class="
            row
            justify-content-space-between
            align-items-center
            mb-1_5
            phones
          "
          v-show="count == 3"
        >
          <h-input
            :transparent="false"
            name="phoneNumber3"
            placeholder="02124653986"
            v-model="registerData.stepFive.phoneNumberTree"
            :ignore-error-message="true"
            number
            maxlength="11"
            class="input"
          />
          <div
            class="row justify-content-space-between align-items-center actions"
          >
            <icons-close
              hash-color="var(--color-error)"
              :width="12"
              :height="12"
              @click="deletePhoneThree"
            />

            <span class="pluse" style="opacity: 0">
              <icons-pluse />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="left">
      <label>کارت ویزیت نمایشگاه</label>
      <h-drop-zone
        :formats="['jpg', 'png']"
        :multiple="false"
        :max-file="1"
        :init-data="
          registerData.stepFive.visitImage == null
            ? []
            : [registerData.stepFive.visitImage]
        "
        @get-files="setFile"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { useExhibitionRegister } from "~~/stores/registerExhibition";

const count = ref(1);
const registerData = useExhibitionRegister();

const deletePhoneTwo = () => {
  registerData.stepFive.phoneNumberTwo = "";
};
const deletePhoneThree = () => {
  registerData.stepFive.phoneNumberTree = "";
  count.value = 2;
};

const setFile = (file: any) => {
  if (!file[0]) {
    registerData.stepFive.visitImage = null;
    return;
  }
  registerData.stepFive.visitImage = file[0][0] ?? null;
};
onMounted(() => {
  if (registerData.stepFive.phoneNumberTree) {
    count.value = 3;
  } else if (registerData.stepFive.phoneNumberTwo) {
    count.value = 2;
  }
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .main__row {
    flex-direction: column;
    gap: 9px !important;
  }
  .label {
    font-family: var(--t3-font-family);
    font-size: var(--t3-font-size);
  }
  .pluse {
    border: 2px solid var(--color-gray-300);
  }
  .address {
    margin-bottom: 1.5rem !important;
  }
}
.main__row {
  gap: 120px;
}
.right {
  width: 100%;
  flex-grow: 1;
}
.label {
  margin-bottom: 4px;
  display: block;
}
svg {
  cursor: pointer;
}
.actions {
  gap: 1.5rem;
}
.phones {
  gap: 28px;
}
.pluse {
  background: var(--color-white);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.left {
  width: 100%;
  flex-grow: 1;
}
</style>