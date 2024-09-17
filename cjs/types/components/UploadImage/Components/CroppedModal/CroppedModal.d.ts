import { ImageFile } from "../ComponentUploadImage";
import { ModalCustomProps } from "@Components/Modal/NormalModal/Modal";
import "./CroppedModal.scss";
export interface ImageResult {
    id?: string | number;
    fileName?: string;
    fileUrl?: string;
    file?: File;
}
export interface ResultAction {
    type: string;
    data?: ImageResult;
    id?: string | number;
}
export interface CroppedModalProps extends ModalCustomProps {
    listImage: ImageFile[];
    isMultiple: boolean;
    defaultAspect?: any;
}
export default function CroppedModal(props: CroppedModalProps): import("react/jsx-runtime").JSX.Element;
