import { FilterParams, FilterResult } from "../IApiResponse";
import { CommentType } from "./CommentType.Enum";
import { ReactionType } from "./ReactionType.Enum";

export interface CommentDto {
  id: string;
  creationDate: Date;
  text: string;
  commentType: CommentType;
  likeCount: number;
  disLikeCount: number;
  userReaction: ReactionType | "";
  sender: Sender | null;
}
export interface CommentFilterResult extends FilterResult<CommentDto> {
  rate: number;
}
interface Sender {
  fullName: string;
  phoneNumber: string;
}
export interface CommentFilterParams extends FilterParams {
  type: CommentType;
  linkId: string;
}
