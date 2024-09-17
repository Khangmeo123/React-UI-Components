import { TimePickerProps as AntdTimePickerProps } from "antd";
import { BORDER_TYPE } from "@Configs/enum";
import "./TimePicker.scss";
import dayjs from "dayjs";
interface TimePickerAction {
    name?: string;
    action?: any;
}
interface TimePickerProps {
    /**User-selected time value*/
    value?: dayjs.Dayjs | any;
    /**Label for current field*/
    label?: string;
    /** Use to format the time selected */
    timeFormat?: string | any[];
    /** Handle the change value of the component */
    onChange?: (value: dayjs.Dayjs | null, timeString?: string) => void;
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
    action?: TimePickerAction;
    /** Placeholder of the component */
    placeholder?: string;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function TimePicker(props: TimePickerProps & AntdTimePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace TimePicker {
    var defaultProps: {
        isMaterial: boolean;
        timeFormat: string;
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE;
        isRequired: boolean;
        disabled: boolean;
        className: string;
    };
}
export default TimePicker;
