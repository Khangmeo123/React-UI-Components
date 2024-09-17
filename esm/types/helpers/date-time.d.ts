import dayjs, { Dayjs } from "dayjs";
export declare function formatDate(date: Dayjs, dateFormat?: string): string;
export declare function formatTime(time: Dayjs, timeFormat?: string): string;
export declare function formatDateTime(time: Dayjs, dateTimeFormat?: string): string;
export declare function isDateValue(date?: string): RegExpMatchArray;
export declare function isTimeValue(time?: string): RegExpMatchArray;
export declare function isDateTimeValue(time?: string): RegExpMatchArray;
export declare function formatInputDate(value: Dayjs | string | undefined): dayjs.Dayjs;
