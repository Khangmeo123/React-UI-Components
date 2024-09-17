import { Model } from "react-3layer-common";
import "./InpageNavigation.scss";
export interface InpageNavigationProps {
    /**Use to custom style the component*/
    className?: string;
    /**List navigation */
    list?: Model[];
    /**Title of component */
    title?: string;
    /**Description of component */
    description?: string;
    /**Handle onChange when onClick to navigation_item */
    onChange?: (data?: any) => void;
    /**Option to custom render name of navigation_item */
    render?: (t: Model) => string;
    /**Pass default navigation_item-active */
    defaultActiveItem?: Model;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function InpageNavigation(props: InpageNavigationProps): import("react/jsx-runtime").JSX.Element;
declare namespace InpageNavigation {
    var defaultProps: {
        render: typeof defaultRenderObject;
    };
}
export default InpageNavigation;
