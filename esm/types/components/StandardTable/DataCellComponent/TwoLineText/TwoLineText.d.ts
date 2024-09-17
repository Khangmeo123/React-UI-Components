import "./TwoLineText.scss";
export interface TwoLineTextProps {
    /**Used to change style Component */
    className?: string;
    /**URL of avatar to display */
    avatar?: string;
    /**Shape option of avatar*/
    avatarType?: "circle" | "square";
    /** Icon name to display */
    icon?: string;
    /** Display value of line 1*/
    valueLine1?: string;
    /** Display value of line 2*/
    valueLine2?: string;
    /** ClassName to style for display line 1 */
    classNameFirstLine?: string;
    /** ClassName to style for display line 2 */
    classNameSecondLine?: string;
    /**Option to add link into cell */
    link?: string;
    /** Count max length to display of line 1 */
    countCharacters1?: number;
    /** Count max length to display of line 2 */
    countCharacters2?: number;
}
declare function TwoLineText(props: TwoLineTextProps): import("react/jsx-runtime").JSX.Element;
declare namespace TwoLineText {
    var defaultProps: {
        avatar: any;
        icon: any;
        tableSize: string;
        avatarType: string;
    };
}
export default TwoLineText;
