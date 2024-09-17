import "./OneLineText.scss";
export interface OneLineTextProps {
    /**Used to change style Component */
    className?: string;
    /**URL of avatar to display */
    avatar?: string;
    /**Shape option of avatar*/
    avatarType?: "circle" | "square";
    /**Size of avatar to display */
    avatarSize?: "lg" | "md" | "sm";
    /** Icon name to display */
    icon?: string;
    /** Value to display */
    value?: string;
    /**Option to add link into cell */
    link?: string;
    /** Count max length to display of value */
    countCharacters?: number;
}
declare function OneLineText(props: OneLineTextProps): import("react/jsx-runtime").JSX.Element;
declare namespace OneLineText {
    var defaultProps: {
        avatar: any;
        icon: any;
        tableSize: string;
        avatarType: string;
    };
}
export default OneLineText;
