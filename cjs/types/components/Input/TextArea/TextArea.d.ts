import { BORDER_TYPE } from "@Configs/enum";
import "./TextArea.scss";
export interface TextAreaAction {
    name?: string;
    action?: any;
}
export interface TextAreaProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**User-filled value*/
    value?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Use to custom style the component*/
    className?: string;
    /**Boolean to show the lenght of value user-filled*/
    showCount?: boolean;
    /**Set maximum length of value*/
    maxLength?: number;
    /**Provide a custom action (onClick) to the component*/
    action?: TextAreaAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Handle the change value of the field*/
    onChange?: (T: string | null) => void;
    /**Handle onEnter action*/
    onEnter?: (T: string | null) => void;
    /**Handle onBlur action*/
    onBlur?: (T: string | null) => void;
}
declare function TextArea(props: TextAreaProps): import("react/jsx-runtime").JSX.Element;
declare namespace TextArea {
    var defaultProps: {
        label: string;
        type: BORDER_TYPE;
        isRequired: boolean;
        prefix: string;
        disabled: boolean;
        className: string;
        countWord: boolean;
        maxLength: number;
    };
}
export default TextArea;
