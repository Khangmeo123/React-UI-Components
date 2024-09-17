import { UploadImageProps } from "../UploadImage";
import "./ComponentUploadImage.scss";
export interface ImageFile {
    fileId: string | number;
    file: File;
    fileUrl: string | ArrayBuffer;
}
export interface ComponentUploadAvatarProps extends UploadImageProps {
}
export declare function ComponentUploadAvatar(props: ComponentUploadAvatarProps): import("react/jsx-runtime").JSX.Element;
