import { Model } from "react-3layer-common";
import { BORDER_TYPE } from "@Configs/enum";
import { InputAction } from "../InputText/InputText";
import "./InputSelect.scss";
export interface InputSelectProps<T extends Model> {
    /**User-selected value*/
    value?: T;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /** Focus to input of inputSelect */
    expanded?: boolean;
    /** Set expand value */
    handlePressExpandedIcon?: () => void;
    /** Placeholder of the Component */
    placeHolder?: string;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Handle the action when click clear value*/
    onClear?: (T: T) => void;
    /**Handle action on search*/
    onSearch?: (T: string) => void;
    /**Handle onKeyDown action*/
    onKeyDown?: (event: any) => void;
    /**Handle onEnter action*/
    onKeyEnter?: (event: any) => void;
    /**Handle the action when clear input search*/
    handleClearInput?: () => void;
    /**Use to custom style the component*/
    className?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Label for current field*/
    label?: string;
    /** Show symbol * as required field */
    isRequired?: boolean;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**True for data list of filter is Enum (not use in code)*/
    isEnumerable?: boolean;
    /**Boolean true if used for filter*/
    isFilter?: boolean;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function InputSelect(props: InputSelectProps<Model>): import("react/jsx-runtime").JSX.Element;
declare namespace InputSelect {
    var defaultProps: {
        render: typeof defaultRenderObject;
        expanded: boolean;
        disabled: boolean;
    };
}
declare function defaultRenderObject<T extends Model>(t: T): any;
export default InputSelect;
