import { Model } from "react-3layer-common";
import { Observable } from "rxjs";
import "./AdvanceEnumFilterMaster.scss";
export interface AdvanceEnumMasterProps<T extends Model> {
    /**Value users select*/
    value?: number | string;
    /**List value users select*/
    listValue?: number[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change the component*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Handle the change value of the component*/
    onChange?: (id: number, T?: T) => void;
    /**Handle the change list value of the component */
    onChangeMultiple?: (ids?: [], selectedList?: T[]) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
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
    /**Use to custom style the component*/
    className?: string;
    /**Show maximum length of item of each item in the dropdown*/
    maxLengthItem?: number;
    /**Custom height of dropdown data list*/
    height?: number;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function AdvanceEnumFilterMaster(props: AdvanceEnumMasterProps<Model>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceEnumFilterMaster {
    var defaultProps: {
        appendToBody: boolean;
        render: typeof defaultRenderObject;
        disabled: boolean;
    };
}
export default AdvanceEnumFilterMaster;
