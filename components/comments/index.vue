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
      <div class="comment-list" v-for="(item, index) in comments" :key="index">
        <div class="comment-list__item">
          <div class="item__header row justify-content-space-between">
            <h4 class="font-2">{{ item.sender?.fullName ?? "کاربر مهمان" }}</h4>
            <span class="font-5 color-gary">{{
              TimeAgo(item.creationDate)
            }}</span>
          </div>
          <div class="item__content mt-1">
            <p v-text="item.text"></p>
          </div>
          <div class="row footer justify-content-space-between">
            <div class="reply">
              <a href="#">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33312 1.86719L1.88867 6.20052M1.88867 6.20052H16.1109V13.1339M1.88867 6.20052L6.33312 10.5339"
                    stroke="#007AFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                پاسخ</a
              >
            </div>
            <div
              v-if="reactionLoading"
              class="row reActions align-items-center"
            >
              <h-skeletor width="100px" style="height: 15px" />
            </div>
            <div v-else class="reActions row align-items-center">
              <div
                :class="[
                  'like row font-5',
                  { active: item.userReaction == ReactionType.like },
                ]"
                @click="like(item.id)"
              >
                <icons-like
                  hash-color="var(--color-blue)"
                  v-if="item.userReaction == ReactionType.like"
                />
                <icons-like v-else />
                <label>{{ item.likeCount }}</label>
              </div>
              <div
                :class="[
                  'dislike row font-5',
                  { active: item.userReaction == ReactionType.disLike },
                ]"
                @click="disLike(item.id)"
              >
                <icons-dis-like
                  hash-color="var(--color-blue)"
                  v-if="item.userReaction == ReactionType.disLike"
                />
                <icons-dis-like v-else />
                <label>{{ item.disLikeCount }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { CommentDto } from "~~/models/comments/CommentDto";
import { ref } from "#imports";
import {
  GetCommentByFilter,
  CreateComment,
  ReactionToComment,
} from "~~/services/comment.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { CommentType } from "~~/models/comments/CommentType.Enum";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { ReactionToCommentCommand } from "~~/models/comments/ReactionToCommentCommand";
import { ReactionType } from "~~/models/comments/ReactionType.Enum";
import * as Yup from "yup";
import { CreateCommentCommand } from "~~/models/comments/CreateCommentCommand";
import { authStore } from "~~/stores/auth.store";
import { ToastType } from "~~/composables/useToast";
import { TimeAgo } from "~~/utilities/dateUtil";
import { Form } from "vee-validate";

const reactionLoading = ref(false);
const loading = ref(false);
const comments: Ref<CommentDto[]> = ref([]);
const store = authStore();
const toast = useToast();

const sendComment = async () => {
  var fullName = `${store.user?.name} ${store.user?.family}`;
  if (fullName == "" || fullName == " ") {
    fullName = "کاربر مهمان";
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
const props = defineProps<{
  linkId: string;
  type: CommentType;
}>();
const commentText = ref("");
const validationSchema = Yup.object().shape({
  commentText: Yup.string()
    .min(5, "لطفا نظر کامل تری وارد کنید")
    .required()
    .label("نظر"),
});
const emit = defineEmits(["GetCommentCount"]);
onMounted(async () => {
  await getComments();
});
const getComments = async () => {
  var res = await ProssesAsync<IApiResponse<FilterResult<CommentDto>>>(
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
    emit("GetCommentCount", res.data?.entityCount ?? 0);
  }
};
const like = async (id: string) => {
  if (store.isLogin == false) {
    toast.showToast("برای انجام اعملیات باید وارد حساب کاربری خود شوید");
    return;
  }
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () =>
      ReactionToComment(new ReactionToCommentCommand(id, ReactionType.like)),
    reactionLoading
  );
  if (res.isSuccess) {
    var comment = comments.value.find((x) => x.id == id);
    if (comment) {
      comment.likeCount++;
      if (
        comment.userReaction &&
        comment.userReaction == ReactionType.disLike
      ) {
        comment.disLikeCount--;
      }
      comment.userReaction = ReactionType.like;
    }
  }
};
const disLike = async (id: string) => {
  if (store.isLogin == false) {
    toast.showToast("برای انجام اعملیات باید وارد حساب کاربری خود شوید");
    return;
  }
  var res = await ReactionToComment(
    new ReactionToCommentCommand(id, ReactionType.disLike)
  );
  if (res.isSuccess) {
    var comment = comments.value.find((x) => x.id == id);
    if (comment) {
      comment.disLikeCount++;
      if (comment.userReaction && comment.userReaction == ReactionType.like) {
        comment.likeCount--;
      }
      comment.userReaction = ReactionType.disLike;
    }
  }
};
</script>

<style scoped>
.comment-list__item {
  background: var(--color-white);
  color: var(--color-black-200);
  padding: 2rem;
  border-radius: 18px;
  margin-bottom: 1rem;
}
.comment-list__item p {
  line-height: 180%;
  font-weight: 500;
  text-align: right;
  letter-spacing: -0.02em;
}
.color-gary {
  color: var(--color-gray-600);
}
h4 {
  color: var(--color-black);
}
.comment-list__item .footer {
  margin-top: 28px;
}
.reply a {
  color: var(--color-blue);
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
}
.dislike,
.like {
  gap: 0.5rem;
  cursor: pointer;
}
.like {
  margin-left: 1rem;
}
</style>