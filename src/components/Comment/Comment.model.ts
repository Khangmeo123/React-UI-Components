import { Dayjs } from "dayjs";
import { Model, ModelFilter } from "react-3layer-common";

export class Message extends Model {
  id?: number;
  discussionId: string;
  content?: string;
  mobileContent?: string;
  creatorId?: number;
  createdAt?: Dayjs;
  updatedAt?: Dayjs;
  deletedAt?: Dayjs;
  creator?: Creator;
  isOwner?: boolean;
  isPopup?: boolean;
  constructor(message?: Message) {
    super();
    if (message) {
      this.discussionId = message.discussionId ? message.discussionId : null;
      this.content = message.content ? message.content : null;
      this.mobileContent = message.mobileContent ? message.mobileContent : null;
      
    }
  }
}

export class MessageFilter extends ModelFilter {}

export class Creator extends Model {
  id?: number;
  userName?: string;
  displayName?: string;
  avatar?: string;
}

export class FileModel extends Model {
  id: number;
  key?: string;
  name?: string;
  content?: string;
  mimetype?: string;
  isFile?: boolean;
  path?: string;
  level?: number;
}
