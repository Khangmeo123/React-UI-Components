import { TFunction } from "i18next";
import { ModelFilter } from "react-3layer-common";
import "./TagFilter.scss";
export interface TagFilterProps {
    /**Use to custom style the component*/
    className?: string;
    /**Current value filter*/
    value?: ModelFilter;
    /**KeyWord of data file to be translated*/
    keyTranslate?: string;
    /** Set fields that not display value filter*/
    hiddenField?: string[];
    /**Fields that icon clear is disabled*/
    exceptField?: string[];
    /**Provide a prop to show filter field mapping*/
    mappingField?: {
        [key: string]: string;
    };
    /**Provide a translate function*/
    translate?: TFunction;
    /**Handle the action when click clear filter*/
    onClear?: (t: any) => void;
    /**Handle the change value of the component*/
    handleChangeFilter?: (valueFilter: ModelFilter) => void;
}
declare function TagFilter(props: TagFilterProps): import("react/jsx-runtime").JSX.Element;
export default TagFilter;
