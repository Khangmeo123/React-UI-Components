import { ReactNode } from "react";
import { BORDER_TYPE, NUMBER_TYPE } from "@Configs/enum";
import "./InputNumber.scss";
interface InputNumberAction {
    name?: string;
    action?: any;
}
export interface InputNumberProps {
    /**Label for current field*/
    label?: string;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**User-filled value*/
    value?: number;
    /**Prefix for filter value*/
    prefix?: string | ReactNode;
    /**Suffix for filter value*/
    suffix?: string | ReactNode;
    /**Allow value to be negative or not*/
    allowNegative?: boolean;
    /**Provide an option set decimal number type for value*/
    numberType?: NUMBER_TYPE;
    /**Reverse symbol “.” and “,”*/
    isReverseSymb?: boolean;
    /**Provide a length of number behind the point (character)*/
    decimalDigit?: number;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean /**Not allow to handle change value*/;
    /**Read only field*/
    readOnly?: boolean;
    /**Use to custom style the component*/
    className?: string;
    /**Min of the value number*/
    min?: number;
    /**Max of the value number*/
    max?: number;
    /** Provide a custom action (onClick) to the component */
    action?: InputNumberAction;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Handle the change value of the component*/
    onChange?: (T: number) => void;
    /**Handle onEnter action*/
    onEnter?: (T: number) => void;
    /**Handle onBlur action*/
    onBlur?: (T: number) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function InputNumber(props: InputNumberProps): import("react/jsx-runtime").JSX.Element;
declare namespace InputNumber {
    var defaultProps: {
        label: string;
        type: BORDER_TYPE;
        isSmall: boolean;
        isRequired: boolean;
        allowNegative: boolean;
        isReverseSymb: boolean;
        numberType: NUMBER_TYPE;
        decimalDigit: number;
        disabled: boolean;
        readOnly: boolean;
        prefix: string;
    };
}
export default InputNumber;
