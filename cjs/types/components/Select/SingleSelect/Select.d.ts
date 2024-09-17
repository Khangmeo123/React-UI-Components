import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { BORDER_TYPE } from "@Configs/enum";
import { InputAction } from "@Components/Input/InputText/InputText";
import "./Select.scss";
export interface SelectProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Value users select*/
    value?: Model;
    /**Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**True for data list  is Enum*/
    isEnumerable?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Api to get list data*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (id: number, T?: T) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TModelFilter;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Label for current field*/
    label?: string;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Title of button add new */
    selectWithAddTitle?: string;
    /** Control the size of the component */
    isSmall?: boolean;
    /**Prefer option to select*/
    preferOptions?: T[];
    /**Show maximum length of item in each data row*/
    maxLengthItem?: number;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Use to custom style the component*/
    className?: string;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function Select(props: SelectProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace Select {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumerable: boolean;
        appendToBody: boolean;
        render: typeof defaultRenderObject;
        isMaterial: boolean;
        disabled: boolean;
        maxLengthItem: number;
    };
}
export default Select;
