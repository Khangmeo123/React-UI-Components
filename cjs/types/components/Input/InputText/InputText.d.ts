import { BORDER_TYPE } from "@Configs/enum";
import React, { ReactNode } from "react";
import "./InputText.scss";
export interface InputAction {
    name?: ReactNode;
    action?: any;
}
export interface InputTextProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Option to set password field */
    typeInput?: "text" | "password";
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Prefix for filter value*/
    prefix?: string | JSX.Element;
    /**Suffix for filter value*/
    suffix?: string | JSX.Element;
    /**User-filled value*/
    value?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Read only field*/
    readOnly?: boolean;
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
    /**Handle the change value of the field*/
    onChange?: (T: string | null) => void;
    /**Handle onEnter action*/
    onEnter?: (T: string | null) => void;
    /**Handle onBlur action*/
    onBlur?: (T: string | null) => void;
    /**Handle onKeyDown action*/
    onKeyDown?: (event: any) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    autoComplete?: boolean;
    nameAttr?: string;
}
declare const InputText: React.ForwardRefExoticComponent<InputTextProps & React.RefAttributes<any>>;
export default InputText;
