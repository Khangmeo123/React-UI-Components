import { Model, ModelFilter } from "react-3layer-common";
import { Observable } from "rxjs";
import { Creator, FileModel, Message } from "./Comment.model";
import "./Comment.scss";
export interface CommentProps<TFilter extends ModelFilter> {
    /**Creator of comment*/
    userInfo: Creator;
    /**Option to prevent comment submission*/
    canSend?: boolean;
    /**Placeholder of input comment*/
    placeholder?: string;
    /**Title above of comment component*/
    title?: string;
    /**Title of button save comment*/
    titleSave?: string;
    /**Title of button cancel comment*/
    titleCancel?: string;
    /**Id of this discussion*/
    discussionId: string;
    /**Set true to show the title of comment component*/
    isShowHeader: boolean;
    /**ModelFilter of param of API use for get list comment*/
    classFilter?: new () => TFilter;
    /**API get list of comment/chat*/
    getMessages?: (TModelFilter?: TFilter) => Observable<Message[]>;
    /**API get quantity of comment/chat*/
    countMessages?: (TModelFilter?: TFilter) => Observable<number>;
    /**API to submit new comment/chat*/
    postMessage?: (Message: Message) => Observable<Message>;
    /**API for edit a comment existed*/
    updateMessage?: (Message: Message) => Observable<Message>;
    /**Boolean attribute to control editable comment existed*/
    canEditMessage?: boolean;
    /**API use when you what to delete a comment*/
    deleteMessage?: (Message: Message) => Observable<boolean>;
    /**API show list suggest of user when you enter @ and want to tag someone to this comment*/
    suggestList?: (filter: TFilter) => Observable<Model[]>;
    /**API call when you want to save file to server and save it to this comment*/
    attachFile?: (File: File) => Observable<FileModel>;
}
export interface filterAction {
    action: string;
    order?: string;
    skip?: number;
    take?: number;
    data?: ModelFilter;
    discussionId?: string;
}
export interface listAction {
    action: string;
    data?: Message[];
    message?: Message;
}
declare function Comment(props: CommentProps<ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace Comment {
    var defaultProps: {
        isShowHeader: boolean;
        placeholder: string;
        titleSave: string;
        titleCancel: string;
        title: string;
        canSend: boolean;
        canEditMessage: boolean;
    };
}
export default Comment;
