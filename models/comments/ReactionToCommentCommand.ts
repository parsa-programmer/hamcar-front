import { ReactionType } from "./ReactionType.Enum";

export class ReactionToCommentCommand {
constructor(public commentId: string, public reactionType: ReactionType) {
}
}
