<template>
  <div>
    <Head>
      <Title>پرداخت با موفقیت انجام شد</Title>
    </Head>
    <h-alert :type="AlertType.Success"
      >پرداخت با موفقیت انجام شد
      <p class="mt-1">درحال اعمال نردبان ، لطفا منتظر بمانید ...</p></h-alert
    >
  </div>
</template>

<script lang="ts" setup>
import { AlertType } from "~~/models/utilities/AlertType";
import { UseNardeban } from "~~/services/advertisement.service";
const router = useRouter();
const toast = useToast();
onMounted(async () => {
  const id = router.currentRoute.value.query.id;
  if(!id){
    router.push('/');
  }
  var res = await UseNardeban(id?.toString() ?? "");
  if (res.isSuccess) {
    toast.showToast("نردبان با موفقیت روی آگهی اعمال شد");
    router.push("/account/exhibition/adverts");
  }
});
</script>

<style>
</style>