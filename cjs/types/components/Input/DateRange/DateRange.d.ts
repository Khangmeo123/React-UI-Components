import type { RangePickerProps } from "antd/lib/date-picker";
import { BORDER_TYPE } from "@Configs/enum";
import * as dayjs from 'dayjs';
import "./DateRange.scss";
interface DateRangeAction {
    name?: string;
    action?: any;
}
interface DateRangeProps {
    /**Label for current field*/
    label?: string;
    /**User-selected values*/
    value: [dayjs.Dayjs, dayjs.Dayjs];
    /** Use to format the date selected */
    dateFormat?: string[];
    /** Handle the change value of the component */
    onChange?: (value: [dayjs.Dayjs, dayjs.Dayjs], dateString?: [string, string]) => void;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    typeCustomDate?: BORDER_TYPE;
    /** Control the size of the component */
    isSmall?: boolean;
    /** Not allow to handle change the component */
    disabled?: boolean;
    /** Show * as required field */
    isRequired?: boolean;
    /** Use to custom style the component */
    className?: string;
    /** Provide a custom action (onClick) to the component */
    action?: DateRangeAction;
    /** Placeholder of the component */
    placeholder?: [string, string];
    /**Return element Popup container */
    getPopupContainer?: () => HTMLElement;
    /**Pass className to style for dropdown */
    dropdownClassName?: any;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function DateRange(props: DateRangeProps & RangePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace DateRange {
    var defaultProps: {
        dateFormat: string[];
        label: string;
        isSmall: boolean;
        typeCustomDate: BORDER_TYPE;
        isRequired: boolean;
        disabled: boolean;
        className: string;
    };
}
export default DateRange;
