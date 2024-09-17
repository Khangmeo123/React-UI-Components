import { RadioGroupProps, RadioProps } from "antd";
import RadioGroup from "./RadioGroup";
import "./Radio.scss";
export interface RadioComponentProps {
    /**Handle the change value */
    onChange?: (value: boolean) => void;
    /**Specifies whether the radio is selected */
    checked?: boolean;
    /**Not allow change value */
    disabled?: boolean;
}
declare function Radio(props: RadioComponentProps & RadioProps & RadioGroupProps): import("react/jsx-runtime").JSX.Element;
declare namespace Radio {
    var Group: typeof RadioGroup;
}
export default Radio;
