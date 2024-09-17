import { Model } from "react-3layer-common";
import { BORDER_TYPE } from "@Configs/enum";
import { Observable } from "rxjs";
import { InputAction } from "@Components/Input/InputText/InputText";
export interface SelectProps<T extends Model> {
    /**Value users select*/
    value?: Model;
    /**List value users select*/
    listValue?: Model[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Handle the change value of the field*/
    onChange?: (id: number, T?: T) => void;
    /**Handle the change list value of the component */
    onChangeMultiple?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Label for current field*/
    label?: string;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option to select*/
    preferOptions?: T[];
    /**Option to select multiple*/
    isMultiple?: boolean;
    /**Api to get list data*/
    getList?: () => Observable<T[]>;
    /**Custom height of dropdown data list*/
    height?: number;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction;
    /**Show maximum length of item in each data row*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Use to custom style the component*/
    className?: string;
    /**Use to set time get list to call*/
    isLoadMultipleTimes?: boolean;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function EnumSelect(props: SelectProps<Model>): import("react/jsx-runtime").JSX.Element;
declare namespace EnumSelect {
    var defaultProps: {
        appendToBody: boolean;
        render: typeof defaultRenderObject;
        disabled: boolean;
        maxLengthItem: number;
    };
}
export default EnumSelect;
