import { RefObject } from "react";
import { Subscription } from "rxjs";
import { Model } from "react-3layer-common";
import { TreeNode } from "@Components/Tree/TreeNode";
import { Dayjs } from "dayjs";
export declare const CommonService: {
    useSubscription(): Subscription[];
    useClickOutside(ref: RefObject<any>, callback: () => void): void;
    useClickOutsideMultiple(refFirst: RefObject<any>, ref: RefObject<any>, callback: () => void): void;
    toDayjsDate(date: string): Dayjs;
    isEmpty(obj: any): boolean;
    limitWord(input: string, max: number): string;
    useStateCallback(initialState: any): any[];
    uniqueArray(array: any[]): any;
    arrayMove(arr: any[], fromIndex: number, toIndex: number): void;
    buildTree<T extends Model>(listItem: T[], parent?: TreeNode<T>, keyNodes?: number[], tree?: TreeNode<T>[]): [TreeNode<T>[], number[]];
    listToTree<T extends Model & {
        children: any[];
    }>(list: T[]): T[];
    setDisabledNode<T extends Model>(nodeId: number, tree: TreeNode<T>[]): void;
    setOnlySelectLeaf<T extends Model>(tree: TreeNode<T>[]): void;
};
