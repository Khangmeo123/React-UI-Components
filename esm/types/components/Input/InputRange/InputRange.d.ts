import { BORDER_TYPE } from "@Configs/enum";
import { InputNumberProps } from "../InputNumber/InputNumber";
import "./InputRange.scss";
export interface InputRangeProps extends InputNumberProps {
    /**User-filled values*/
    valueRange: [number, number] | [];
    /**Placeholder of the component*/
    placeHolderRange?: [string, string];
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /**Handle the change [fromNumber, toNumber] of the component*/
    onChangeRange: (T: [number, number]) => void;
    /**Control the size of the component*/
    isSmall?: boolean;
}
declare function InputRange(props: InputRangeProps): import("react/jsx-runtime").JSX.Element;
declare namespace InputRange {
    var defaultProps: {
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE;
        isRequired: boolean;
        prefix: string;
        disabled: boolean;
        className: string;
        maxLength: number;
    };
}
export default InputRange;
