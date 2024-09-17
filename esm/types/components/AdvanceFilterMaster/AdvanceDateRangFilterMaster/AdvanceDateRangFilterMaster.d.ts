import type { RangePickerProps } from "antd/lib/date-picker";
import { ADVANCE_DATE_RANGE_TYPE, BORDER_TYPE } from "@Configs/enum";
import { TFunction } from "i18next";
import "./AdvanceDateRangFilterMaster.scss";
import dayjs from "dayjs";
interface AdvanceDateRangeFilterMasterProps {
    /**Value [fromDate, toDate] users select*/
    value?: [dayjs.Dayjs, dayjs.Dayjs];
    /**Use to format the date selected*/
    dateFormat?: string[];
    /**Handle the change value of the component*/
    onChange?: (item?: any, value?: [dayjs.Dayjs, dayjs.Dayjs]) => void;
    /**Use to custom style the component*/
    className?: string;
    /**Not allow to handle change the component*/
    disabled?: boolean;
    /**Prop of DateRange Component*/
    typeCustomDate?: BORDER_TYPE;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Label for current field*/
    label?: string;
    /**Selected value of list value suggest*/
    activeItem?: any;
    /**Control the type of component: SHORT, INPUT */
    type?: ADVANCE_DATE_RANGE_TYPE;
    /**Prop of component InputSelect*/
    inputType?: BORDER_TYPE;
    /**Prop of component InputSelect*/
    placeHolderSelect?: string;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Provide a translate function*/
    translate?: TFunction;
    /**Placeholder of the component*/
    placeholder?: [string, string];
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function AdvanceDateRangeFilterMaster(props: AdvanceDateRangeFilterMasterProps & RangePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace AdvanceDateRangeFilterMaster {
    var defaultProps: {
        dateFormat: string[];
        placeholder: string[];
        type: ADVANCE_DATE_RANGE_TYPE;
        placeHolderSelect: string;
        appendToBody: boolean;
        bgColor: string;
    };
}
export default AdvanceDateRangeFilterMaster;
