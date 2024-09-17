import { DatePickerProps as AntdDatePickerProps } from "antd";
import { BORDER_TYPE } from "@Configs/enum";
import "./DatePicker.scss";
import * as dayjs from 'dayjs';
interface DatePickerAction {
    name?: string;
    action?: any;
}
interface DatePickerProps {
    /**User-selected value*/
    value?: dayjs.Dayjs;
    /**Label for current field*/
    label?: string;
    /** Use to format the date selected */
    dateFormat?: string[];
    /** Handle the change value of the component */
    onChange?: (value: dayjs.Dayjs | null, dateString?: string) => void;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE;
    /** Control the size of the component */
    isSmall?: boolean;
    /** Not allow to handle change the component */
    disabled?: boolean;
    /** Show * as required field */
    isRequired?: boolean;
    /** Use to custom style the component */
    className?: string;
    /** Provide a custom action (onClick) to the component */
    action?: DatePickerAction;
    /** Placeholder of the component */
    placeholder?: string;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function DatePicker(props: DatePickerProps & AntdDatePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace DatePicker {
    var defaultProps: {
        dateFormat: string[];
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE;
        isRequired: boolean;
        disabled: boolean;
        className: string;
    };
}
export default DatePicker;
