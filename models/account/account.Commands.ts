import { Gender } from "../utilities/Gender";

export interface EditAccountCommand {
  name: string;
  family: string;
  email: string;
  gender: Gender;
}
export interface SetNoteCommand {
  description: string;
  advertisementId: string;
}
