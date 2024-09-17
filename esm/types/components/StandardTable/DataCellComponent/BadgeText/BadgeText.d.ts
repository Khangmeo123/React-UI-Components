import "./BadgeText.scss";
export interface BadgeTextProps {
    /**Used to change style of badge text */
    className?: string;
    /**Value to display */
    value?: string;
    /**Background color to display */
    backgroundColor?: string;
    /**Customer value color */
    color?: string;
    /**Max length of display value */
    countCharacters?: number;
}
declare function BadgeText(props: BadgeTextProps): import("react/jsx-runtime").JSX.Element;
declare namespace BadgeText {
    var defaultProps: {
        avatar: any;
        icon: any;
    };
}
export default BadgeText;
