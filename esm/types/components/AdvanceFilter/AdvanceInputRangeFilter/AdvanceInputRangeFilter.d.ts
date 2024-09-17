import { InputNumberProps } from "@Components/Input/InputNumber/InputNumber";
import { BORDER_TYPE } from "@Configs/enum";
import "./AdvanceInputRangeFilter.scss";
export interface AdvanceInputRangeFilterProps extends InputNumberProps {
    /**[filterValueFrom, filterValueTo] of filter*/
    valueRange: [number, number] | [];
    /**Placeholder of the component*/
    placeHolderRange?: [string, string];
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Handle the change values of the component*/
    onChangeRange: (T: [number, number]) => void;
    /**Control the size of the component*/
    isSmall?: boolean;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function AdvanceInputRangeFilter(props: AdvanceInputRangeFilterProps): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceInputRangeFilter {
    var defaultProps: {
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE;
        prefix: string;
        disabled: boolean;
        className: string;
        maxLength: number;
        bgColor: string;
    };
}
export default AdvanceInputRangeFilter;
