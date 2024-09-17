import { Dayjs } from "dayjs";
import { Model, ModelFilter } from "react-3layer-common";
export declare class Message extends Model {
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
    constructor(message?: Message);
}
export declare class MessageFilter extends ModelFilter {
}
export declare class Creator extends Model {
    id?: number;
    userName?: string;
    displayName?: string;
    avatar?: string;
}
export declare class FileModel extends Model {
    id: number;
    key?: string;
    name?: string;
    content?: string;
    mimetype?: string;
    isFile?: boolean;
    path?: string;
    level?: number;
}
