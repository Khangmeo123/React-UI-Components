import { ProgressIndicatorModel } from "../ProgressIndicator";
import "./VerticalProgressIndicator.scss";
export interface VerticalProgressIndicatorProps {
    list?: ProgressIndicatorModel[];
    idContainer?: string;
}
declare function VerticalProgressIndicator(props: VerticalProgressIndicatorProps): import("react/jsx-runtime").JSX.Element;
declare namespace VerticalProgressIndicator {
    var defaultProps: {
        list: any[];
    };
}
export default VerticalProgressIndicator;
