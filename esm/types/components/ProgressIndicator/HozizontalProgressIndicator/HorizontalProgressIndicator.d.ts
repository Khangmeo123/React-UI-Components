import { ProgressIndicatorModel } from "../ProgressIndicator";
import "./HorizontalProgressIndicator.scss";
export interface HorizontalProgressIndicatorProps {
    list?: ProgressIndicatorModel[];
    idContainer?: string;
}
declare function HorizontalProgressIndicator(props: HorizontalProgressIndicatorProps): import("react/jsx-runtime").JSX.Element;
declare namespace HorizontalProgressIndicator {
    var defaultProps: {
        list: any[];
    };
}
export default HorizontalProgressIndicator;
