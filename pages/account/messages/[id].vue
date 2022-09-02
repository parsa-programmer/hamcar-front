<template>
  <div>
    <div class="chat__page__title">
      <div>
        <h5 class="font-5" v-text="chatStore.selectedGroup?.title"></h5>
        <span class="color-blue font-6"></span>
      </div>
      <div class="actions">
        <icons-phone
          :width="22"
          hash-color="var(--color-black-200)"
          :height="22"
        />

        <div class="actions__more">
          <svg
            width="4"
            height="22"
            viewBox="0 0 4 22"
            class="cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="showDeleteAction = !showDeleteAction"
          >
            <circle cx="2" cy="2" r="2" fill="var(--color-black-200)" />
            <circle cx="2" cy="11" r="2" fill="var(--color-black-200)" />
            <circle cx="2" cy="20" r="2" fill="var(--color-black-200)" />
          </svg>
        </div>
      </div>
    </div>
    <account-messages-content />
    <account-messages-send-message-mobile />
    <loadings-full-loading v-if="loading" />
    <h-modal v-model="showDeleteAction">
      <ul class="menu">
        <li class="" @click="openDeletePopup">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4C0.447715 4 0 4.44772 0 5C0 5.55229 0.447715 6 1 6V4ZM23 6C23.5523 6 24 5.55229 24 5C24 4.44772 23.5523 4 23 4V6ZM3.99504 4.9005C3.94008 4.35095 3.45004 3.95001 2.9005 4.00496C2.35095 4.05992 1.95001 4.54996 2.00496 5.0995L3.99504 4.9005ZM21.995 5.0995C22.05 4.54996 21.649 4.05992 21.0995 4.00496C20.55 3.95001 20.0599 4.35095 20.005 4.9005L21.995 5.0995ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11H13ZM11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17H11ZM17.4965 11.083C17.5424 10.5327 17.1334 10.0493 16.583 10.0035C16.0327 9.95759 15.5493 10.3666 15.5035 10.917L17.4965 11.083ZM15.0035 16.917C14.9576 17.4673 15.3666 17.9507 15.917 17.9965C16.4673 18.0424 16.9507 17.6334 16.9965 17.083L15.0035 16.917ZM8.49655 10.917C8.45068 10.3666 7.96733 9.95759 7.41696 10.0035C6.86658 10.0493 6.45759 10.5327 6.50346 11.083L8.49655 10.917ZM7.00346 17.083C7.04932 17.6334 7.53267 18.0424 8.08305 17.9965C8.63342 17.9507 9.04241 17.4673 8.99655 16.917L7.00346 17.083ZM15.5801 22H8.41995V24H15.5801V22ZM5.43484 19.2985L3.99504 4.9005L2.00496 5.0995L3.44476 19.4975L5.43484 19.2985ZM20.005 4.9005L18.5652 19.2985L20.5552 19.4975L21.995 5.0995L20.005 4.9005ZM11 11V17H13V11H11ZM15.5035 10.917L15.0035 16.917L16.9965 17.083L17.4965 11.083L15.5035 10.917ZM6.50346 11.083L7.00346 17.083L8.99655 16.917L8.49655 10.917L6.50346 11.083ZM12 6H16V4H12V6ZM16 6H23V4H16V6ZM1 6H8V4H1V6ZM8 6H12V4H8V6ZM16 4H8V6H16V4ZM9 5V3H7V5H9ZM10 2H14V0H10V2ZM15 3V5H17V3H15ZM14 2C14.5523 2 15 2.44772 15 3H17C17 1.34315 15.6569 0 14 0V2ZM8.41995 22C6.8787 22 5.5882 20.8321 5.43484 19.2985L3.44476 19.4975C3.70037 22.0535 5.8512 24 8.41995 24V22ZM9 3C9 2.44772 9.44772 2 10 2V0C8.34315 0 7 1.34315 7 3H9ZM15.5801 24C18.1488 24 20.2996 22.0535 20.5552 19.4975L18.5652 19.2985C18.4118 20.8321 17.1213 22 15.5801 22V24Z"
              fill="#ABADB3"
            />
          </svg>

          حذف و اتمام چت
        </li>
        <li></li>
      </ul>
    </h-modal>
    <h-delete-popup
      title="حذف چت"
      description="آیا از حذف این چت مطمئن هستید؟ مخاطب نیز امکان ادامه چت را نخواهد داشت."
      @accepted="deleteChat"
      v-model="isOpenDeletePopup"
    >
    </h-delete-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { DeleteGroup } from "~~/services/chat.service";
import { UseChatStore } from "~~/stores/chat.store";

definePageMeta({
  layout: "full-screen",
});

const chatStore = UseChatStore();
const router = useRouter();
const route = useRoute();
const toast = useToast();

const loading = ref(false);
const isOpenDeletePopup = ref(false);
const showDeleteAction = ref(false);

const openDeletePopup = () => {
  showDeleteAction.value = false;
  isOpenDeletePopup.value = true;
};
const deleteChat = async () => {
  loading.value = true;
  var res = await DeleteGroup(chatStore.selectedGroup?.groupId ?? "");
  if (res.isSuccess) {
    chatStore.groups = chatStore.groups.filter(
      (f) => f.groupId != chatStore.selectedGroup?.groupId
    );
    chatStore.selectedGroup = null;
    chatStore.chats = [];
    toast.showToast("چت با موفقیت حذف شد");
    router.push('/account/messages')
  }
  loading.value = false;
};

onMounted(async () => {
  const groupId = route.params.id;
  if (!groupId.toString()) {
    await router.push("/account/messages");
  } else {
    var group = chatStore.groups.find((f) => f.groupId == groupId.toString());
    if (group) {
      chatStore.setChats(group);
    } else {
      await router.push("/account/messages");
    }
  }
});
</script>

<style scoped>
.chat__page__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.5rem !important;
}
.actions {
  display: flex;
  gap: 2rem;
}
.menu li {
  display: flex;
  gap: 1rem;
  color: var(--color-gray-600);
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
}
</style>