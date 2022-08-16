import { FetchApi } from "~/utilities/customFetchApi";
import { CreateCommentCommand } from "~~/models/comments/CreateCommentCommand";
import { ReactionToCommentCommand } from "~~/models/comments/ReactionToCommentCommand";
import { IApiResponse, FilterResult } from "~~/models/IApiResponse";
import { CommentDto, CommentFilterParams, CommentFilterResult } from "~/models/comments/CommentDto";

export const CreateComment = async (
  command: CreateCommentCommand
): Promise<IApiResponse<undefined>> => {
  var result = await FetchApi<undefined>("/comment", {
    method: "post",
    body: JSON.stringify(command)
  });
  return result;
};

export const ReactionToComment = async (
  command: ReactionToCommentCommand
): Promise<IApiResponse<undefined>> => {
  var result = await FetchApi<undefined>(`/comment`, {
    method: "put",
    body: JSON.stringify(command),
  });
  return result;
};

export const DeleteCommentReaction = async (
  commentId: string
): Promise<IApiResponse<undefined>> => {
  var result = await FetchApi<undefined>(`/comment?commentId=${commentId}`, {
    method: "delete",
  });
  return result;
};

export const GetCommentByFilter = async (
  filterParams: CommentFilterParams
): Promise<IApiResponse<CommentFilterResult>> => {
  var result =  FetchApi<CommentFilterResult>("comment", {
    params: {
      pageId: filterParams.pageId,
      take: filterParams.take,
      type: filterParams.type,
      linkId: filterParams.linkId,
    },
  });

  return result;
};
