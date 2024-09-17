import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { BORDER_TYPE } from "@Configs/enum";
import "./AdvanceIdFilter.scss";
export interface AdvanceIdFilterProps<T extends Model, TModelFilter extends ModelFilter> {
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
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Api to get list data filter*/
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
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Set maximum length of each data row to render*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function AdvanceIdFilter(props: AdvanceIdFilterProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceIdFilter {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        appendToBody: boolean;
        render: typeof defaultRenderObject;
        disabled: boolean;
        maxLengthItem: number;
        bgColor: string;
    };
}
export default AdvanceIdFilter;
