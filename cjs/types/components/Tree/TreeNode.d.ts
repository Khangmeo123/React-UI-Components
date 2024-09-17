import { Model } from "react-3layer-common";
import { DataNode } from "antd/lib/tree";
export declare class TreeNode<T extends Model> implements DataNode {
    title: string;
    key: number;
    item: Model;
    children: TreeNode<T>[];
    disabled: boolean;
    constructor(value?: T);
}
