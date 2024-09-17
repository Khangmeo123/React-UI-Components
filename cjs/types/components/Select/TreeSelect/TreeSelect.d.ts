import { ReactNode } from "react";
import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { BORDER_TYPE } from "@Configs/enum";
import { TreeNode } from "@Components/Tree/TreeNode";
import "./TreeSelect.scss";
export interface TreeSelectProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Title for filter field*/
    title?: string;
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
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Provide a function to render a specific property as name*/
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
    treeTitleRender?: (T: T) => ReactNode;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Component enable to search data list*/
    isUsingSearch?: boolean;
    /** Prefer node item of tree*/
    preferOptions?: T[];
    /** Show maximum length of item in each data row in tree*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "gray" | "white";
    /**Use to custom style the component*/
    className?: string;
    /** Option to let user cant select the selected item in tree list */
    isDisableSelected?: boolean;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
export interface filterAction {
    type: string;
    data?: ModelFilter;
}
declare function TreeSelect(props: TreeSelectProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace TreeSelect {
    var defaultProps: {
        placeHolder: string;
        searchProperty: string;
        searchType: string;
        classFilter: typeof ModelFilter;
        onlySelectLeaf: boolean;
        isMaterial: boolean;
        checkable: boolean;
        disabled: boolean;
        selectable: boolean;
        treeTitleRender: (t: any) => any;
        keyField: string;
    };
}
export default TreeSelect;
