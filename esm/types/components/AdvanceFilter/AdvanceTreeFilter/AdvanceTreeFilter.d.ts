import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { BORDER_TYPE } from "@Configs/enum";
import { TreeNode } from "@Components/Tree/TreeNode";
import "./AdvanceTreeFilter.scss";
export interface AdvanceTreeFilterProps<T extends Model, TModelFilter extends ModelFilter> {
    /** User-selected values*/
    listItem?: Model[];
    /** User-selected value*/
    item?: Model;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /** An optional to multiple check filter values*/
    checkable?: boolean;
    /** Prop of AntdTreeProps*/
    selectable?: boolean;
    /**Check treeNode precisely; parent treeNode and children treeNodes are not associated*/
    checkStrictly?: boolean;
    /** Not allow to handle change filter*/
    disabled?: boolean;
    /** Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /** Placeholder of the component*/
    placeHolder?: string;
    /** Key of selected node */
    selectedKey?: number;
    /**Not allow to select the father item that contain a lot of items inside*/
    onlySelectLeaf?: boolean;
    /** Provide a function to render a specific property as name*/
    render?: (T: T) => string;
    /** API to get data*/
    getTreeData?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /** Function to change selected items*/
    onChange?: (T: Model[], TT: boolean) => void;
    /** Model filter class of API get list data*/
    classFilter?: new () => TModelFilter;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /** Label for current field*/
    label?: string;
    /** Control the size of the component*/
    isSmall?: boolean;
    /** Prop of AntdTreeProps*/
    treeTitleRender?: (T: T) => string;
    /** Prefer node item of tree*/
    preferOptions?: T[];
    /** Set maximum length of each data row to render*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Append this component to body*/
    appendToBody?: boolean;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
export interface filterAction {
    type: string;
    data?: ModelFilter;
}
declare function AdvanceTreeFilter(props: AdvanceTreeFilterProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceTreeFilter {
    var defaultProps: {
        placeHolder: string;
        searchProperty: string;
        searchType: string;
        classFilter: typeof ModelFilter;
        onlySelectLeaf: boolean;
        checkable: boolean;
        disabled: boolean;
        selectable: boolean;
        bgColor: string;
        treeTitleRender: (t: any) => any;
        keyField: string;
    };
}
export default AdvanceTreeFilter;
