import { ReactNode } from "react";
import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { TreeNode } from "@Components/Tree/TreeNode";
import "./AdvanceTreeFilterMaster.scss";
export interface AdvanceTreeFilterMasterProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Label for current field*/
    label?: string;
    /**User-selected values*/
    listItem?: Model[];
    /**User-selected value*/
    item?: Model;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**An optional to multiple check filter values*/
    checkable?: boolean;
    /**Prop of AntdTreeProps*/
    selectable?: boolean;
    /**Check treeNode precisely; parent treeNode and children treeNodes are not associated*/
    checkStrictly?: boolean;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Key of selected node */
    selectedKey?: number;
    /**Not allow to select the father item that contain a lot of items inside*/
    onlySelectLeaf?: boolean;
    /**API to get data*/
    getTreeData?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Function to change selected items*/
    onChange?: (T: Model[], TT: boolean) => void;
    /**Model filter class of API get list data*/
    classFilter?: new () => TModelFilter;
    /**Provide a function to render a specific property as name*/
    render?: (T: T) => string;
    /**Prefer node item of tree*/
    preferOptions?: T[];
    /**Set maximum length of text to search*/
    maxLength?: number;
    /**Set maximum length of data name display in each row of tree*/
    maxLengthItem?: number;
    /**Use to custom style the component*/
    className?: string;
    /** Prop of AntdTreeProps*/
    treeTitleRender?: (T: T) => ReactNode;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
export interface filterAction {
    type: string;
    data?: ModelFilter;
}
declare function AdvanceTreeFilterMaster(props: AdvanceTreeFilterMasterProps<Model, ModelFilter>): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceTreeFilterMaster {
    var defaultProps: {
        placeHolder: string;
        searchProperty: string;
        searchType: string;
        classFilter: typeof ModelFilter;
        onlySelectLeaf: boolean;
        checkable: boolean;
        disabled: boolean;
        selectable: boolean;
        treeTitleRender: (t: any) => any;
        keyField: string;
    };
}
export default AdvanceTreeFilterMaster;
