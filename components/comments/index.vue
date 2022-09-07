<template>
  <div class="technical__comment">
    <Form
      class="technical__form mb-4"
      @submit="sendComment"
      :validation-schema="validationSchema"
      v-slot="{ meta }"
    >
      <h-textarea
        name="commentText"
        class="technical__textarea"
        :trans-parent="false"
        placeholder="دیدگاه یا تجربه رانندگی خود را با دیگران به اشتراک بگذارید ..."
        v-model="commentText"
      ></h-textarea>
      <h-button
        type="submit"
        :disabled="loading || meta.valid == false"
        class="btn__submit"
        :loading="loading"
      >
        افزودن دیدگاه
      </h-button>
    </Form>
    <template v-if="loading">
      <div class="comment-list__item" v-for="index in 3" :key="index">
        <div class="item__header row justify-content-space-between">
          <h4 class="font-2">
            <h-skeletor width="80px" style="height: 10px" />
          </h4>
          <span class="font-5 color-gary">
            <h-skeletor width="80px" style="height: 10px" />
          </span>
        </div>
        <div class="item__content mt-2">
          <h-skeletor type="three-line" />
        </div>
        <div class="footer justify-content-space-between">
          <h-skeletor
            type="box"
            width="100%"
            style="height: 20px; display: block"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <div v-for="(item, index) in comments" :key="index">
        <comments-item :item="item" v-model="comments" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { CommentDto, CommentFilterResult } from "~~/models/comments/CommentDto";
import { ref } from "#imports";
import {
  GetCommentByFilter,
  CreateComment,
  ReactionToComment,
} from "~~/services/comment.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { CommentType } from "~~/models/comments/CommentType.Enum";
import { IApiResponse } from "~~/models/IApiResponse";
import * as Yup from "yup";
import { CreateCommentCommand } from "~~/models/comments/CreateCommentCommand";
import { authStore } from "~~/stores/auth.store";
import { ToastType } from "~~/composables/useToast";
import { Form } from "vee-validate";

const reactionLoading = ref(false);
const loading = ref(false);
const comments: Ref<CommentDto[]> = ref([]);
const store = authStore();
const toast = useToast();
const commentText = ref("");
const validationSchema = Yup.object().shape({
  commentText: Yup.string()
    .min(5, "لطفا دیدگاه کامل تری وارد کنید")
    .required()
    .label("دیدگاه"),
});
const props = defineProps<{
  linkId: string;
  type: CommentType;
}>();

const sendComment = async (test: any, t: any) => {
  var fullName = `${store.user?.name} ${store.user?.family}`;
  if (fullName == "" || fullName == " ") {
    fullName = "کاربر مهمان";
  }
  if(!commentText || !props.linkId){
    return;
  }
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () =>
      CreateComment(
        new CreateCommentCommand(
          commentText.value,
          props.linkId,
          store.user?.phoneNumber,
          fullName,
          props.type
        )
      ),
    loading
  );
  if (res.isSuccess) {
    toast.showToast("نظر شما با موفقیت ثبت شد", ToastType.success);
    commentText.value = "";
    await getComments();
  }
};
const emit = defineEmits(["GetCommentData", "loading"]);
onMounted(async () => {
  await getComments();
});
watch(loading, (val) => {
  emit("loading", val);
});
const getComments = async () => {
  var res = await ProssesAsync<IApiResponse<CommentFilterResult>>(
    () =>
      GetCommentByFilter({
        take: 100,
        type: props.type,
        pageId: 1,
        linkId: props.linkId,
      }),
    loading
  );
  if (res.isSuccess) {
    comments.value = res?.data?.data ?? [];
    emit("GetCommentData", res.data?.entityCount ?? 0, res.data?.rate);
  }
};
</script>
<style scoped>
@media screen and (max-width:768px) {
  .technical__textarea{
    padding:0 !important;
  }
}
</style>