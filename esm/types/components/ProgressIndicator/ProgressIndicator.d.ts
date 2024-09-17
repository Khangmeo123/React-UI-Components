import ProgressIndicatorContent from "./ProgressIndicatorContent/ProgressIndicatorContent";
export interface ProgressIndicatorModel {
    sectionName?: string;
    sectionId?: number;
}
export interface ProgressIndicatorProps {
    /**Pass list section [{sectionName,sectionId}] */
    list?: ProgressIndicatorModel[];
    /**Pass Id of ProgressIndicatorContent to control action scroll */
    idContainer?: string;
    /**An option to set  vertical or horizontal type*/
    type?: "vertical" | "horizontal";
    /**Use to custom style the component*/
    className?: string;
}
declare const ProgressIndicator: {
    (props: ProgressIndicatorProps): import("react/jsx-runtime").JSX.Element;
    Content: typeof ProgressIndicatorContent;
    defaultProps: {
        list: any[];
        type: string;
    };
};
export default ProgressIndicator;
