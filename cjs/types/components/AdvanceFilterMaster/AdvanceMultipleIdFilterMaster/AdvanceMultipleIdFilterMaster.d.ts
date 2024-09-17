import { Model, ModelFilter } from "react-3layer-common";
import { Observable } from "rxjs";
import "./AdvanceMultipleIdFilterMaster.scss";
export interface AdvanceMultipleIdFilterMasterProps<T extends Model, TModelFilter extends ModelFilter> {
    /**list value users select*/
    values?: any[];
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
    /**Api to get list data filter*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (selectedList?: T[], ids?: []) => void;
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
declare function defaultRenderObject<T extends Model>(t: T): string;
declare function AdvanceMultipleIdFilterMaster(props: AdvanceMultipleIdFilterMasterProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceMultipleIdFilterMaster {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumList: boolean;
        render: typeof defaultRenderObject;
        disabled: boolean;
        typeRender: string;
        isIdValue: boolean;
        maxLength: number;
    };
}
export default AdvanceMultipleIdFilterMaster;
