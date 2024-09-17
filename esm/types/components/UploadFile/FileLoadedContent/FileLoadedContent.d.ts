import { FileModel } from "../UploadFile";
import "./FileLoadedContent.scss";
export interface FileLoadedContentProps {
    /**Pass list file loaded */
    file?: FileModel;
    /**Function use to remove file */
    removeFile?: (fileId: string | number) => void;
    /**Option to set component have only view mode */
    isViewMode?: boolean;
    /**Use to custom style the component*/
    className?: string;
}
declare function FileLoadedContent(props: FileLoadedContentProps): import("react/jsx-runtime").JSX.Element;
declare namespace FileLoadedContent {
    var defaultProps: {
        loadedFiles: any[];
    };
}
export default FileLoadedContent;
