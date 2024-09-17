import { Model, ModelFilter } from "react-3layer-common";
import { Observable } from "rxjs";
import "./InputSearch.scss";
export interface InputSearchProps<T extends Model, TModelFilter extends ModelFilter> {
    /**User-filled value to filter*/
    value?: string | null;
    /**Property of inputSearchSelect*/
    valueFilter?: TModelFilter;
    /**Property of inputSearchSelect*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Property of inputSearchSelect*/
    classFilter: new () => TModelFilter;
    /**Property of inputSearchSelect*/
    render?: (t: T) => string;
    /**Property of inputSearchSelect*/
    searchType?: string;
    /**Property of inputSearchSelect*/
    searchProperty?: string;
    /**Use to custom style the component*/
    className?: string;
    /**Property of inputSearchSelect*/
    onChangeSearchField?: (id: number, T?: T) => void;
    /**Handle the change value of the component*/
    onChange?: (value: string) => void;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Boolean to set input show with animation*/
    animationInput?: boolean;
    /**Option to set position for InputSearch */
    position?: "left" | "right";
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function InputSearch(props: InputSearchProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace InputSearch {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        render: typeof defaultRenderObject;
        animationInput: boolean;
    };
}
export default InputSearch;
