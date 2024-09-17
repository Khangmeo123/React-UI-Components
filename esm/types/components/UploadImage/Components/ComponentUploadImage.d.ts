import { UploadImageProps } from "../UploadImage";
import "./ComponentUploadImage.scss";
export interface ImageFile {
    fileId: string | number;
    file: File;
    fileUrl: string | ArrayBuffer;
}
export interface ComponentUploadImageProps extends UploadImageProps {
}
export declare function ComponentUploadImage(props: ComponentUploadImageProps): import("react/jsx-runtime").JSX.Element;
