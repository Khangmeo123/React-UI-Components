import { ReactNode } from "react";
export interface ProgressIndicatorContentProps {
    children: ReactNode;
    /**Set max height of view cover content */
    height?: number;
    /**Set max width of view cover content */
    width?: number;
    /**Set contentId so ProgressIndicator can control data view/action scroll */
    contentId?: string;
    /**Use to custom style the component*/
    className?: string;
}
declare function ProgressIndicatorContent(props: ProgressIndicatorContentProps): import("react/jsx-runtime").JSX.Element;
declare namespace ProgressIndicatorContent {
    var defaultProps: {
        height: number;
    };
}
export default ProgressIndicatorContent;
