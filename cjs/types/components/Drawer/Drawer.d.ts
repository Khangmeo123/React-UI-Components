import { NUMBER_BUTTON } from "@Configs/enum";
import { ReactNode } from "react";
import "./Drawer.scss";
export interface DrawerProps {
    children?: ReactNode;
    /**Control the drawer visible or not*/
    visible?: boolean;
    /**Control the footer of drawer visible or not*/
    visibleFooter?: boolean;
    /**Control the disable state of Apply button and Apply button*/
    disableButton?: boolean;
    /**Control the loading state of the drawer*/
    loading?: boolean;
    /**The title for drawer*/
    title?: ReactNode;
    /**The description for title*/
    description?: ReactNode;
    /**The title of Apply button*/
    titleButtonApply?: string;
    /**The title of ApplyNext button*/
    titleButtonApplyNext?: string;
    /**The title of cancel button*/
    titleButtonCancel?: string;
    /**Control number button of footer drawer*/
    numberButton?: NUMBER_BUTTON;
    /**Function to be called when user click close icon*/
    handleClose?: () => void;
    /**Function to be called when user click cancel button*/
    handleCancel?: () => void;
    /**Function to be called when user click Apply button. After click the drawer will be closed*/
    handleSave?: () => void;
    /**Function to be called when user click submit button ApplyNext*/
    handleApplyNext?: () => void;
    /**Control close icon visible or not*/
    isHaveCloseIcon?: boolean;
    /**Control the size of drawer*/
    size?: "sm" | "lg" | "xl" | "2xl" | "max";
    /**Control the size of drawer*/
    side?: "left" | "right";
    /**Use to custom style the component*/
    className?: string;
}
declare function Drawer(props: DrawerProps): import("react/jsx-runtime").JSX.Element;
declare namespace Drawer {
    var defaultProps: {
        visibleFooter: boolean;
        disableButton: boolean;
        numberButton: NUMBER_BUTTON;
        isHaveCloseIcon: boolean;
        size: string;
        side: string;
    };
}
export default Drawer;
