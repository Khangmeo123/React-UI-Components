import "./Tag.scss";
export interface TagProps {
    /**Used to change style Component */
    className?: string;
    /**Value of Tag*/
    value?: string;
    /**Set background color Tag */
    backgroundColor?: string;
    /**Set color Tag */
    color?: string;
    /**Max length of display value */
    countCharacters?: number;
    /** Provide a custom action (onClick) to the component */
    action?: () => void;
    /**Option change size of component */
    size?: "sm" | "md";
}
declare function Tag(props: TagProps): import("react/jsx-runtime").JSX.Element;
declare namespace Tag {
    var defaultProps: {
        backgroundColor: string;
        color: string;
        size: string;
    };
}
export default Tag;
