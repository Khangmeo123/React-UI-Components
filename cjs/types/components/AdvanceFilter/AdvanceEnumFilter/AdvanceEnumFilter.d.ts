import { Model } from "react-3layer-common";
import { BORDER_TYPE } from "@Configs/enum";
import { Observable } from "rxjs";
export interface AdvanceEnumProps<T extends Model> {
    /**Value users select*/
    value?: Model;
    /**List value users select*/
    listValue?: Model[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change the component*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Handle the change value of the component*/
    onChange?: (id: number, T?: T) => void;
    /**Handle the change list value of the component */
    onChangeMultiple?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Label for current field*/
    label?: string;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Option to select multiple*/
    isMultiple?: boolean;
    /**Api to get list data filter*/
    getList?: () => Observable<T[]>;
    /**Custom height of dropdown data list*/
    height?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function AdvanceEnumFilter(props: AdvanceEnumProps<Model>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceEnumFilter {
    var defaultProps: {
        appendToBody: boolean;
        render: typeof defaultRenderObject;
        disabled: boolean;
        bgColor: string;
    };
}
export default AdvanceEnumFilter;
