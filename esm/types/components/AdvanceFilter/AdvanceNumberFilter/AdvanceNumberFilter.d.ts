import { ReactNode } from "react";
import { BORDER_TYPE, NUMBER_TYPE } from "@Configs/enum";
import "./AdvanceNumberFilter.scss";
export interface AdvanceNumberProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**User-filled value*/
    value?: number;
    /**Prefix for filter value*/
    prefix?: string | ReactNode;
    /**Suffix for filter value*/
    suffix?: string | ReactNode;
    /**Allow values to be negative not*/
    allowPositive?: boolean;
    /**Provide an option set decimal number type for value filter*/
    numberType?: NUMBER_TYPE;
    /**Reverse symbol “.” and “,”*/
    isReverseSymb?: boolean;
    /**Provide a length of number behind the point (character)*/
    decimalDigit?: number;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Use to custom style the component*/
    className?: string;
    /**Min of the value number*/
    min?: number;
    /**Max of the value number*/
    max?: number;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Handle the change value filter of the component*/
    onChange?: (T: number) => void;
    /**Handle onEnter action*/
    onEnter?: (T: number) => void;
    /**Handle onBlur action*/
    onBlur?: (T: number) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gary";
}
declare function AdvanceNumberFilter(props: AdvanceNumberProps): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceNumberFilter {
    var defaultProps: {
        label: string;
        type: BORDER_TYPE;
        isSmall: boolean;
        allowPositive: boolean;
        isReverseSymb: boolean;
        numberType: NUMBER_TYPE;
        decimalDigit: number;
        disabled: boolean;
        prefix: string;
        bgColor: string;
    };
}
export default AdvanceNumberFilter;
