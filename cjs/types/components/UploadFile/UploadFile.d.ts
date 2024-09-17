import React, { ReactNode, SetStateAction } from "react";
import type { Observable } from "rxjs";
import "./UploadFile.scss";
export interface FileModel {
    id?: number;
    fileId?: string | number;
    name?: string;
    url?: string;
    appUserId?: number;
    rowId?: string;
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
export interface UploadFileProps {
    /**Option for multiple UploadFile */
    isMultiple?: boolean;
    /**Content of UploadFile component */
    uploadContent?: string;
    /**Function change list file uploaded */
    updateList?: (files: FileModel[]) => void;
    /**API use to upload list file selected to server*/
    uploadFile?: (files: File[] | Blob[]) => Observable<FileModel[]>;
    /**Option change style UploadFile to OutLine */
    isBtnOutLine?: boolean;
    /**Option limit maximum size (b) of list file to upload to server */
    maximumSize?: number;
    /** Option to change style of upload  "link", "button", "dragAndDrop"*/
    type?: "link" | "button" | "dragAndDrop";
    /**Icon of component */
    icon?: ReactNode;
    /**Option to set component have only view mode */
    isViewMode?: boolean;
    /**Function to set list file in status loading */
    setListFileLoading?: React.Dispatch<SetStateAction<FileModel[]>>;
    /**Use to custom style the component*/
    className?: string;
}
export declare function UploadFile(props: UploadFileProps): import("react/jsx-runtime").JSX.Element;
export declare namespace UploadFile {
    var FileLoadedContent: typeof import("./FileLoadedContent/FileLoadedContent").default;
    var FileLoadingContent: typeof import("./FileLoadingContent/FileLoadingContent").default;
    var defaultProps: {
        isMultiple: boolean;
        uploadContent: string;
        files: any[];
        isBtnOutLine: boolean;
        maximumSize: number;
    };
}
export default UploadFile;
