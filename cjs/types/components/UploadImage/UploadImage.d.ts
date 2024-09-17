import { ReactNode } from "react";
import { Model } from "react-3layer-common";
import type { Observable } from "rxjs";
import "./UploadImage.scss";
import { UPLOADTYPE_IMAGE } from "@Configs/enum";
export declare class File extends Model {
    id?: number;
    name?: string;
    url?: string;
    appUserId?: number;
    extension?: string;
    size?: number;
    rowId?: string;
    error?: string;
}
export interface FileModel extends File {
    content?: string;
    mimeType?: string;
    isFile?: boolean;
    key?: any;
    path?: string;
    level?: number;
    isDelete?: boolean;
    clearAction?: (fileId: string | number) => void;
    handleInput?: (e: any) => void;
}
export interface UploadImageProps {
    /** Option to change style of upload  IMAGE, AVATAR*/
    type?: UPLOADTYPE_IMAGE;
    /**Auto upload image */
    autoUpload?: boolean;
    /**Option for multiple UploadImage */
    isMultiple?: boolean;
    /**Option for minimized size UploadImage */
    isMinimized?: boolean;
    /**List image uploaded*/
    files?: FileModel[];
    /**Function change list image uploaded */
    updateList?: (files: FileModel[]) => void;
    /**API use to upload list image selected to server*/
    uploadFile?: (files: File[] | Blob[]) => Observable<FileModel[]>;
    /**Icon of component */
    icon?: ReactNode;
    /**Url of avatar for type UPLOADTYPE_IMAGE.AVATAR */
    currentAvatar?: string;
    /**API upload image to server for type UPLOADTYPE_IMAGE.AVATAR */
    uploadAvatar?: (file: File | Blob) => Observable<FileModel>;
    /**Function change currentAvatar for type UPLOADTYPE_IMAGE.AVATAR */
    updateAvatar?: (files: FileModel) => void;
    /**Function use to remove image */
    removeFile?: (fileId?: string | number) => Observable<boolean>;
    /**Option change size of UploadImage */
    size?: "lg" | "md" | "sm" | "xs";
    /**Use to custom style the component*/
    className?: string;
    /**Option limit maximum size (b) of list image to upload to server */
    maximumSize?: number;
}
declare function UploadImage(props: UploadImageProps): import("react/jsx-runtime").JSX.Element;
declare namespace UploadImage {
    var defaultProps: {
        type: UPLOADTYPE_IMAGE;
        isMultiple: boolean;
        isMinimized: boolean;
        autoUpload: boolean;
        size: string;
        maximumSize: number;
    };
}
export default UploadImage;
