import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { BORDER_TYPE } from "@Configs/enum";
import "./AdvanceIdMultipleFilter.scss";
export interface AdvanceIdMultipleFilterProps<T extends Model, TFilter extends ModelFilter> {
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
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Api to get list data filter*/
    getList?: (TModelFilter?: TFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
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
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Append this component to body*/
    appendToBody?: boolean;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function AdvanceIdMultipleFilter(props: AdvanceIdMultipleFilterProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceIdMultipleFilter {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumerable: boolean;
        render: typeof defaultRenderObject;
        disabled: boolean;
        bgColor: string;
    };
}
export default AdvanceIdMultipleFilter;
