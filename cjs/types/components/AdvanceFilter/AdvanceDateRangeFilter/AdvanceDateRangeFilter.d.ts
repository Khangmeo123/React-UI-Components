import { RangePickerProps } from "antd/lib/date-picker";
import { BORDER_TYPE } from "@Configs/enum";
import "./AdvanceDateRangeFilter.scss";
import { Dayjs } from "dayjs";
interface AdvanceDateRangeFilterProps {
    /**Label for current field */
    label?: string;
    /**Value filter [fromDate, toDate] users select */
    values: [Dayjs, Dayjs];
    /**Use to format the date selected */
    dateFormat?: string[];
    /** Handle the change value of the component */
    onChange?: (value: [Dayjs, Dayjs], dateString?: [string, string]) => void;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL  */
    type?: BORDER_TYPE;
    /**Control the size of the component */
    isSmall?: boolean;
    /**Not allow to handle change the component */
    disabled?: boolean;
    /**Use to custom style the component */
    className?: string;
    /**Placeholder of the component */
    placeholder?: [string, string];
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /** Set unique class for popup calendar */
    uniquePopupClassName?: string;
}
declare function AdvanceDateRangeFilter(props: AdvanceDateRangeFilterProps & RangePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceDateRangeFilter {
    var defaultProps: {
        dateFormat: string[];
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE;
        isRequired: boolean;
        disabled: boolean;
        className: string;
        bgColor: string;
    };
}
export default AdvanceDateRangeFilter;
