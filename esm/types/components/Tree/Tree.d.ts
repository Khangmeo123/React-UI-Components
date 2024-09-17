import type { TreeProps as AntdTreeProps } from "antd/lib/tree";
import { ReactNode, RefObject } from "react";
import { Model, ModelFilter } from "react-3layer-common";
import type { Observable } from "rxjs";
import { TreeNode as CustomTreeNode } from "./TreeNode";
import { TreeNode } from "@Components/Tree/TreeNode";
import "./Tree.scss";
export interface TreeProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Item selected*/
    items?: Model[];
    /**List TreeNode data*/
    treeData?: CustomTreeNode<T>[];
    /**Value filter for api getTreeData*/
    valueFilter?: TModelFilter;
    /**List key of node is expanding*/
    expandedKeys?: number[];
    /**List key of node checked*/
    checkedKeys?: number[];
    /**Switch to multiple check option*/
    checkable?: boolean;
    /**Key of selected node */
    selectedKey?: number;
    /**Not allow to select the father item that contain a lot of items inside*/
    onlySelectLeaf?: boolean;
    /**API to get data*/
    getTreeData?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Function to change selected items*/
    onChange?: (treeNode: CustomTreeNode<T>[], disableChange?: boolean) => void;
    /**Provide a function to render a specific property as name*/
    render?: (treeNode: T) => string;
    /**Option to show add new button*/
    selectWithAdd?: () => void;
    /**Prefer node item of tree*/
    preferOptions?: T[];
    /**Show maximum length of each row item in tree (must pass value when render option return string)*/
    maxLengthItem?: number;
    /**Pass ref of list data select */
    selectListRef?: RefObject<any>;
    /** Prop of AntdTreeProps*/
    titleRender?: (T: T) => ReactNode;
    /** Option to collapse and expand tree data */
    isExpand?: boolean;
    /** Option to let user cant select the selected item in tree list */
    isDisableSelected?: boolean;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
declare function Tree(props: TreeProps<Model, ModelFilter> & AntdTreeProps): import("react/jsx-runtime").JSX.Element;
declare namespace Tree {
    var defaultProps: {
        classFilter: typeof ModelFilter;
        searchProperty: string;
        searchType: string;
    };
}
export default Tree;
