import { Model } from "react-3layer-common";
import { BORDER_TYPE } from "@Configs/enum";
import { InputAction } from "../InputText/InputText";
import "./InputTag.scss";
export interface InputTagProps<T extends Model> {
    /**List value users select*/
    listValue?: T[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Handle the action when click clear value*/
    onClear?: (T: T) => void;
    /**Handle the action when click clear mutiValue*/
    onClearMulti?: () => void;
    /**Handle action on search*/
    onSearch?: (T: string) => void;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Component enable to search data list*/
    isUsingSearch?: boolean;
    /**Handle onKeyDown action*/
    onKeyDown?: (event: any) => void;
    /**Handle onEnter action*/
    onKeyEnter?: (event: any) => void;
    /**Boolean true if used for filter*/
    isFilter?: boolean;
    /**Not expand the title row to see more detail on each post (each row)*/
    isNotExpand?: boolean;
    /**Boolean to set show tooltip */
    isShowTooltip?: boolean;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /** Set expand value */
    handlePressExpandedIcon?: () => void;
    /**Clear search value when open */
    clearSearchTerm?: boolean;
}
declare function InputTag(props: InputTagProps<Model>): import("react/jsx-runtime").JSX.Element;
declare namespace InputTag {
    var defaultProps: {
        type: BORDER_TYPE;
        label: any;
        render: typeof defaultRenderObject;
    };
}
declare function defaultRenderObject<T extends Model>(t: T): any;
export default InputTag;
