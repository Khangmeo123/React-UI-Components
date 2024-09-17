import { ReactNode } from "react";
import { ModalProps as AntModalProps } from "antd";
import { MODAL_SIZE } from "@Configs/enum";
import "./NonModal.scss";
export interface NonModalCustomProps extends AntModalProps {
    /**State open or close of non-modal component */
    open?: boolean;
    /**Children content of component */
    children?: ReactNode;
    /**Is the modal footer (cancel, apply, apply next button) visible or not*/
    visibleFooter?: boolean;
    /**Change the size of modal*/
    size?: MODAL_SIZE;
    /**Name of apply button*/
    titleButtonApply?: string;
    /**Name of apply next button*/
    titleButtonApplyNext?: string;
    /**Name of cancel button*/
    titleButtonCancel?: string;
    /**Cancel the form*/
    handleCancel?: (event: any) => void;
    /**Save the form*/
    handleSave?: (event: any) => void;
    /**Apply and process to next form*/
    handleApplyNext?: (event: any) => void;
    /**Pass state of loading */
    loadingType?: "default" | "submitting" | "submitted" | "error";
    /**Pass value for element is draggable **/
    uniqueWrapClass?: string;
}
declare function NonModal(props: NonModalCustomProps): import("react/jsx-runtime").JSX.Element;
declare namespace NonModal {
    var defaultProps: {
        size: MODAL_SIZE;
        destroyOnClose: boolean;
        loadingType: string;
    };
}
export default NonModal;
