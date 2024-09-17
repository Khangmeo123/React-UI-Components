import React, { Dispatch, RefObject, SetStateAction } from "react";
import "./OverflowMenu.scss";
export interface ListOverflowMenu {
    title: string;
    action: (params?: any) => void;
    isShow: boolean;
}
export interface CustomProps {
    setExpand?: Dispatch<SetStateAction<boolean>>;
    list?: ListOverflowMenu[];
    appendToBody?: boolean;
    selectListRef?: RefObject<HTMLDivElement>;
    appendToBodyStyle?: React.CSSProperties;
    size?: "md" | "xl";
    floatingDirection: "bottom" | "top";
}
declare function OverflowMenuList(props: CustomProps): React.ReactPortal;
export default OverflowMenuList;
