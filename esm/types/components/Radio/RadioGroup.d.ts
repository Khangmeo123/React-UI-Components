import { RadioGroupProps } from "antd";
import "./Radio.scss";
export interface RadioGroupComponentProps {
    /**Handle change item checked */
    onChecked?: (value: boolean) => void;
    /**Value of item checked */
    value?: any;
    /**Not allow to change value RadioGroup */
    disabled?: boolean;
}
declare function RadioGroup(props: RadioGroupComponentProps & RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export default RadioGroup;
