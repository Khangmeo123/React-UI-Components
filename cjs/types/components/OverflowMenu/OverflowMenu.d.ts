import { ListOverflowMenu } from "./OverflowMenuList";
import "./OverflowMenu.scss";
export interface CustomProps {
    /**List object action {name,function} of menu */
    list?: ListOverflowMenu[];
    /**Change the size of button */
    size?: "md" | "xl";
    /**Append this component to body */
    appendToBody?: boolean;
    /**Option to set type vertical or horizontal */
    type?: "vertical" | "horizontal";
    /**Option to set not allow to click Component */
    disabled?: boolean;
}
declare function OverflowMenu(props: CustomProps): import("react/jsx-runtime").JSX.Element;
declare namespace OverflowMenu {
    var defaultProps: {
        size: string;
        type: string;
    };
}
export default OverflowMenu;
