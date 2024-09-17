import type { ReactNode } from "react";
import "./LayoutCell.scss";
export interface LayoutCellProps {
    /**Used to change style Component */
    className?: string;
    /** Use to custom padding of each cell */
    orderType?: "left" | "right" | "center";
    /** Option to align display value */
    position?: "left" | "right" | "center";
    children: ReactNode;
    /**Pass table size */
    tableSize?: "lg" | "md" | "sm";
}
declare function LayoutCell(props: LayoutCellProps): import("react/jsx-runtime").JSX.Element;
declare namespace LayoutCell {
    var defaultProps: {
        orderType: string;
        tableSize: string;
        position: string;
    };
}
export default LayoutCell;
