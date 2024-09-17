import { Model, ModelFilter } from "react-3layer-common";
import { Observable } from "rxjs";
import "./AdvanceIdFilterMaster.scss";
export interface AdvanceIdFilterMasterProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Value users select*/
    value?: number | string;
    /**Label for current field*/
    label?: string;
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
    /**True for data list of filter is Enum*/
    isEnumList?: boolean;
    /**Boolean set false if value is not an IdValue*/
    isIdValue?: boolean;
    /**Name of property to set value to if value is not an IdValue */
    typeRender?: string;
    /**Api to get list data filter*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (T: number, value?: T) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TModelFilter;
    /**Use to custom style the component*/
    className?: string;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Set maximum length of text to search*/
    maxLength?: number;
    /**Show maximum length of item of each item in the dropdown*/
    maxLengthItem?: number;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function AdvanceIdFilterMaster(props: AdvanceIdFilterMasterProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceIdFilterMaster {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumList: boolean;
        render: typeof defaultRenderObject;
        disabled: boolean;
        maxLength: number;
        maxLengthItem: number;
    };
}
export default AdvanceIdFilterMaster;
