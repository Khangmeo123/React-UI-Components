import { FileModel } from "../UploadFile";
import "./FileLoadingContent.scss";
export interface FileLoadingContentProps {
    /**Pass file loading */
    file?: FileModel;
    /**Use to custom style the component*/
    className?: string;
}
declare function FileLoadingContent(props: FileLoadingContentProps): import("react/jsx-runtime").JSX.Element;
declare namespace FileLoadingContent {
    var defaultProps: {
        loadingFiles: any[];
    };
}
export default FileLoadingContent;
