import { CommentType } from "./CommentType.Enum";

export class CreateCommentCommand {
  constructor(
    public text: string,
    public linkId: string,
    public phoneNumber: string,
    public fullName: string,
    public commentType: CommentType
  ) {}
}
