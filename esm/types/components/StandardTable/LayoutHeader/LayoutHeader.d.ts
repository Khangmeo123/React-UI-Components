import "./LayoutHeader.scss";
export interface LayoutHeaderProps {
    /**Used to change style Component */
    className?: string;
    /** Use to custom padding of each header column */
    orderType?: "left" | "right" | "center";
    /** Option to align display value */
    position?: "left" | "right" | "center";
    /** Title of header */
    title?: string;
    /** Maxlength of title to display */
    maxLength?: number;
    /** Boolean to check if column is sorting */
    isSorter?: boolean;
    /** Option to add state of sorting */
    sortedColumn?: any;
}
declare function LayoutHeader(props: LayoutHeaderProps): import("react/jsx-runtime").JSX.Element;
declare namespace LayoutHeader {
    var defaultProps: {
        orderType: string;
        position: string;
    };
}
export default LayoutHeader;
