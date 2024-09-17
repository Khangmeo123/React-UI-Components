import { ModalProps as AntModalProps } from "antd";
import { ReactNode } from "react";
import "./TearSheet.scss";
export interface TearSheetProps extends AntModalProps {
    children?: ReactNode;
    /**Is the modal footer (cancel, save button) visible or not*/
    visibleFooter?: boolean;
    /**Name of save button*/
    titleButtonSave?: string;
    /**Name of cancel button*/
    titleButtonCancel?: string;
    /**Cancel the form*/
    handleCancel?: (event: any) => void;
    /**Save the form*/
    handleSave?: (event: any) => void;
    /**Pass state of loading */
    loadingType?: "default" | "submitting" | "submitted" | "error";
    /**Pass the classname to change the style component*/
    className?: string;
    /**Control the TearSheet visible or not*/
    visible?: boolean;
    /**Title of header TearSheet */
    title?: string;
    /**Description of header TearSheet  */
    description?: string;
    /**Additional content of header TearSheet  */
    additionalContent?: string;
}
declare function TearSheet(props: TearSheetProps): import("react/jsx-runtime").JSX.Element;
declare namespace TearSheet {
    var defaultProps: {
        titleButtonSave: string;
        titleButtonCancel: string;
        visibleFooter: boolean;
        loadingType: string;
    };
}
export default TearSheet;
