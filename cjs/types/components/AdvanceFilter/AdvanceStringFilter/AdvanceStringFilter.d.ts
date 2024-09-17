import { BORDER_TYPE } from "@Configs/enum";
import React from "react";
import "./AdvanceStringFilter.scss";
export interface AdvanceStringFilterProps {
    /** Label for current field */
    label?: string;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL  */
    type?: BORDER_TYPE;
    /** Prefix for filter value */
    prefix?: string | JSX.Element;
    /** Suffix for filter value */
    suffix?: string | JSX.Element;
    /** User-filled value */
    value?: string;
    /** Not allow to handle change filter */
    disabled?: boolean;
    /** Placeholder of the component */
    placeHolder?: string;
    /** Use to custom style the component */
    className?: string;
    /** Set maximum length of value filter */
    maxLength?: number;
    /** Control the size of the component */
    isSmall?: boolean;
    /** Handle the change value filter of the component */
    onChange?: (T: string | null) => void;
    /** Handle onEnter action */
    onEnter?: (T: string | null) => void;
    /** Handle onBlur action */
    onBlur?: (T: string | null) => void;
    /** Handle onKeyDown action */
    onKeyDown?: (event: any) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare const AdvanceStringFilter: React.ForwardRefExoticComponent<AdvanceStringFilterProps & React.RefAttributes<any>>;
export default AdvanceStringFilter;
