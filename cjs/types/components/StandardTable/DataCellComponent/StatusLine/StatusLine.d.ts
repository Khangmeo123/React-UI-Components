import "./StatusLine.scss";
export interface StatusLineProps {
    /**Used to change style Component */
    className?: string;
    /** Boolean to display status of data */
    active?: boolean;
    /** Display value of status */
    value?: string;
    /** Count max length to display of value */
    countCharacters?: number;
    /** Color of status */
    color?: string;
}
declare function StatusLine(props: StatusLineProps): import("react/jsx-runtime").JSX.Element;
declare namespace StatusLine {
    var defaultProps: {
        active: boolean;
    };
}
export default StatusLine;
