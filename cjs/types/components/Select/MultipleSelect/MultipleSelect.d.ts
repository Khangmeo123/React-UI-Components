import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { BORDER_TYPE } from "@Configs/enum";
import { InputAction } from "@Components/Input/InputText/InputText";
import "./MultipleSelect.scss";
export interface MultipleSelectProps<T extends Model, TFilter extends ModelFilter> {
    /**list value users select*/
    values?: Model[];
    /**Value filter for api get data option*/
    valueFilter?: TFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Api to get list data*/
    getList?: (TModelFilter?: TFilter) => Observable<T[]>;
    /**Handle the change value of the field*/
    onChange?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TFilter;
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Component enable to search data list*/
    isUsingSearch?: boolean;
    /**Prefer option to select*/
    preferOptions?: T[];
    /**Show maximum length of item in each data row*/
    maxLengthItem?: number;
    /**Set show tooltip or not */
    isShowTooltip?: boolean;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Use to custom style the component*/
    className?: string;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function MultipleSelect(props: MultipleSelectProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace MultipleSelect {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumerable: boolean;
        render: typeof defaultRenderObject;
        isMaterial: boolean;
        disabled: boolean;
        maxLengthItem: number;
        isShowTooltip: boolean;
    };
}
export default MultipleSelect;
