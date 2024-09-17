import React, { ReactNode } from "react";
import "./InputView.scss";
import { BORDER_TYPE } from "@Configs/enum";
export interface InputAction {
    name?: ReactNode;
    action?: any;
}
export interface InputViewProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL, NOT_BORDERED */
    type?: BORDER_TYPE;
    /**Prefix for filter value*/
    prefix?: string | JSX.Element;
    /**Show * as require field */
    isRequired?: boolean;
    disabled?: boolean;
    /**Suffix for filter value*/
    suffix?: string | JSX.Element;
    /**User-filled value*/
    value?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Use to custom style the component*/
    className?: string;
    /**Boolean to show the lenght of value user-filled*/
    showCount?: boolean;
    /**Set maximum length of value*/
    maxLength?: number;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Provide a custom action (onClick) to the component*/
    action?: InputAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare const InputView: React.ForwardRefExoticComponent<InputViewProps & React.RefAttributes<any>>;
export default InputView;
