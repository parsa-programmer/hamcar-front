
<template>
  <div class="login">
    <h2 class="login__title">به وبسایت همکار خوش آمدید!</h2>
    <p class="login__caption">
      کد یکبار مصرف به شماره {{ phoneNumber }} پیامک شد; لطفا کد ارسال شده را در
      کادر زیر وارد نمایید.
    </p>
    <p class="login__label">
      کد یکبار مصرف به شماره {{ phoneNumber }} پیامک شد; لطفا کد ارسال شده را در
      کادر زیر وارد نمایید.
    </p>
    <div class="timer__progress">
      <div class="progress__bar">
        <div class="progress__current" ref="target"></div>
      </div>

      <p class="progress_time">
        {{ convertMsToMinutesSeconds(time) }}
      </p>
    </div>
    <Form @submit="validate" :validation-schema="schema" v-slot="{ meta }">
      <h-input
        name="code"
        number
        class="text-center"
        maxlength="5"
        v-model="code"
        placeholder="کد تایید"
      ></h-input>
      <div class="row align-items-center">
        <a
          v-if="time == 0"
          class="send__again mt-2 color-primary cursor-pointer"
          @click="sendAgain"
          >ارسال مجدد کد</a
        >
        <h-button
          class="login__submit"
          :disabled="loading || meta.valid == false"
          type="submit"
          :loading="loading"
        >
          تایید و ادامه
        </h-button>
      </div>
    </Form>
    <div class="login__term desktop">
      <h-icon :icon="Icon.exclamation" />
      <p>
        شماره ام را اشتباه وارد کرده ام.
        <a @click="editPhoneNumber" class="cursor-pointer">ویرایش شماره</a>
      </p>
    </div>
    <div class="login__term mobile">
      <div>
        <h-icon :icon="Icon.edit" />
        <p>
          <a @click="editPhoneNumber" class="cursor-pointer">ویرایش شماره</a>
        </p>
      </div>
      <div v-if="time == 0">
        <h-icon :icon="Icon.refresh" />
        <p>
          <a @click="sendAgain" class="cursor-pointer">ارسال مجدد کد</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import { useAuth } from "~~/composables/auth/useAuth";
import { authStore } from "~~/stores/auth.store";
import { Icon } from "~~/models/utilities/Icon";
import { convertMsToMinutesSeconds } from "~/utilities/numberUtils";
import { gsap } from "gsap";

const props = defineProps({
  isRedirect: {
    type: Boolean,
    default: true,
  },
});

const router = useRouter();
const store = authStore();
const emit = defineEmits(["toggleLoginStep", "successed"]);
let animation: any;
let counterInterval: any = null;
const target = ref();
const { validateCode, login, loading } = useAuth();
const setAnimation = (): void => {
  animation = gsap.fromTo(
    unref(target),
    { width: 0 + "%" },
    {
      duration: 130,
      width: 100 + "%",
      ease: "power2",
    }
  );
};
const code = ref("");
const time = ref(120000);
const phoneNumber = store.phoneNumber;
const schema = Yup.object().shape({
  code: Yup.string()
    .min(5, "کد تایید نامعتبر است")
    .required()
    .label("کد تایید"),
});
const sendAgain = async () => {
  var isSuccess = await login(phoneNumber);
  if (isSuccess) {
    time.value = 120000;
    clearInterval(counterInterval);
    animation.restart();
    setTimer();
  } else {
  }
};
const validate = async (d: any, actions: any) => {
  var isSuccess = await validateCode(phoneNumber, code.value);
  if (isSuccess) {
    if (props.isRedirect) {
      router.push("/");
    } else {
      emit("successed");
    }
  } else {
    actions.setFieldError("code", "کد تایید نامعتبر است");
  }
};
onMounted(() => {
  setAnimation();
  setTimer();
});
const setTimer = () => {
  animation.play();
  counterInterval = setInterval(() => {
    if (time.value > 0) {
      time.value -= 1000;
    } else {
      clearInterval(counterInterval);
    }
  }, 1000);
};
const editPhoneNumber = () => {
  emit("toggleLoginStep", 1);
};
</script>

<style scoped>
.login__term.mobile {
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
.login__term.mobile a {
  color: #ff9500;
  border-bottom: 1px solid #ff9500;
  padding-bottom: 2px;
  text-decoration: none;
}
.login__term.mobile div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
@media screen and (max-width: 1200px) {
  .login__term.desktop {
    display: none;
  }
  .login__term.mobile {
    display: flex;
  }
  .send__again {
    display: none;
  }
}
.send__again {
  font-weight: 800;
}
.timer__progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 1rem;
}
.progress__bar {
  width: 83%;
  order: 1;
  height: 3px;
  background: var(--color-gray-300);
  z-index: 1;
  position: relative;
  border-radius: 2px;
}
.progress__current {
  width: 0;
  height: 3px;
  background: var(--color-blue);
  z-index: 2;
  position: absolute;
  left: 0;
  border-radius: 2px;
}
</style>