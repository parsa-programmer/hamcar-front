<template>
  <div class="comment-list__item">
    <div class="item__header row justify-content-space-between">
      <h4 class="font-2">{{ item.sender?.fullName ?? "کاربر مهمان" }}</h4>
      <span class="font-5 color-gary">{{ TimeAgo(item.creationDate) }}</span>
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
      <div v-if="reactionLoading" class="row reActions align-items-center">
        <h-skeletor width="100px" style="height: 15px" />
      </div>
      <div v-else class="reActions row align-items-center">
        <div
          class="like row font-5 active"
          @click="deleteReaction(item.id)"
          v-if="item.userReaction == ReactionType.like"
        >
          <icons-like hash-color="var(--color-blue)" />
          <label>{{ item.likeCount }}</label>
        </div>
        <div class="like row font-5" @click="like(item.id)" v-else>
          <icons-like />
          <label>{{ item.likeCount }}</label>
        </div>

        <div
          class="dislike row font-5 active"
          @click="deleteReaction(item.id)"
          v-if="item.userReaction == ReactionType.disLike"
        >
          <icons-dis-like hash-color="var(--color-blue)" />
          <label>{{ item.disLikeCount }}</label>
        </div>
        <div class="dislike row font-5" @click="disLike(item.id)" v-else>
          <icons-dis-like />
          <label>{{ item.disLikeCount }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CommentDto } from "~~/models/comments/CommentDto";
import { ReactionToCommentCommand } from "~~/models/comments/ReactionToCommentCommand";
import { ReactionType } from "~~/models/comments/ReactionType.Enum";
import { IApiResponse } from "~~/models/IApiResponse";
import {
  ReactionToComment,
  DeleteCommentReaction,
} from "~~/services/comment.service";
import { authStore } from "~~/stores/auth.store";
import { TimeAgo } from "~~/utilities/dateUtil";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const props = defineProps<{
  item: CommentDto;
  modelValue: CommentDto[];
}>();
const emit = defineEmits(["update:modelValue"]);

const reactionLoading = ref(false);
const store = authStore();
const toast = useToast();

const deleteReaction = async (id: string) => {
  if (store.isLogin == false) {
    toast.showToast("برای انجام اعملیات باید وارد حساب کاربری خود شوید");
    return;
  }
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () => DeleteCommentReaction(id),
    reactionLoading
  );
  if (res.isSuccess) {
    var comments = [...props.modelValue];
    var comment = comments.find((x) => x.id == id);
    if (comment) {
      if (comment.userReaction == ReactionType.disLike) {
        comment.disLikeCount--;
      } else {
        comment.likeCount--;
      }
      comment.userReaction = "";
    }
    emit("update:modelValue", comments);
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
    var comments = [...props.modelValue];
    var comment = comments.find((x) => x.id == id);
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
    emit("update:modelValue", comments);
  }
};
const disLike = async (id: string) => {
  if (store.isLogin == false) {
    toast.showToast("برای انجام اعملیات باید وارد حساب کاربری خود شوید");
    return;
  }
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () =>
      ReactionToComment(new ReactionToCommentCommand(id, ReactionType.disLike)),
    reactionLoading
  );

  if (res.isSuccess) {
    var comments = [...props.modelValue];
    var comment = comments.find((x) => x.id == id);
    if (comment) {
      comment.disLikeCount++;
      if (comment.userReaction && comment.userReaction == ReactionType.like) {
        comment.likeCount--;
      }
      comment.userReaction = ReactionType.disLike;
    }
    emit("update:modelValue", comments);
  }
};
</script>

<style>
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
@media screen and (max-width: 768px) {
  .comment-list__item p {
    font-family: var(--t4-font-family) !important;
    font-size: var(--t4-font-size) !important;
    text-align: justify !important;
  }
}
</style>