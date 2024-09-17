import { DateFilter } from "react-3layer-advance-filters";
import { IdFilter } from "react-3layer-advance-filters";
import { NumberFilter } from "react-3layer-advance-filters";
import { StringFilter } from "react-3layer-advance-filters";
import { ModelFilter, OrderType } from "react-3layer-common";
import { Dispatch, SetStateAction } from "react";
import { ActionFilterEnum } from "@Configs/enum";
import { Dayjs } from "dayjs";
export declare class Filter {
}
type CoreFilter = StringFilter | NumberFilter | DateFilter | IdFilter;
export interface AdvanceFilterAction<T1, T2 = CoreFilter> {
    type: ActionFilterEnum;
    classFilter?: new (params: any) => StringFilter | NumberFilter | DateFilter | IdFilter;
    data?: T1;
    fieldName?: keyof T1 | string;
    fieldType?: keyof T2 | string;
    fieldValue?: any;
    skip?: number;
    take?: number;
    orderBy?: string | number | (string | number)[];
    orderType?: OrderType;
}
export declare function advanceFilterReducer<T1 extends ModelFilter>(state: T1, action: AdvanceFilterAction<T1>): T1;
export declare const advanceFilterService: {
    useFilter<TFilter extends ModelFilter>(modelFilter: TFilter, dispatch: (action: AdvanceFilterAction<TFilter, StringFilter | NumberFilter | DateFilter | IdFilter>) => void, ClassFilter: new () => TFilter): {
        handleChangeFilter: (fieldName: keyof TFilter, fieldType: keyof (StringFilter | NumberFilter | DateFilter | IdFilter) | (keyof StringFilter | NumberFilter | DateFilter | IdFilter)[], ClassSubFilter: new (params: any) => StringFilter | NumberFilter | DateFilter | IdFilter, handleSearch?: () => void) => (value: any) => void;
        handleResetFilter: (handleSearch?: () => void) => () => void;
        handleUpdateNewFilter: (data: TFilter, handleSearch?: () => void) => void;
    };
    useChangeAdvanceFilter<TFilter extends ModelFilter>(modelFilter: TFilter, dispatch: (action: AdvanceFilterAction<TFilter, StringFilter | NumberFilter | DateFilter | IdFilter>) => void, ClassFilter: new () => TFilter, defaultValue?: boolean): {
        loadList: boolean;
        setLoadList: Dispatch<SetStateAction<boolean>>;
        handleSearch: () => void;
        handleChangeFilter: (fieldName: keyof TFilter, fieldType: keyof (StringFilter | NumberFilter | DateFilter | IdFilter) | (keyof StringFilter | NumberFilter | DateFilter | IdFilter)[], ClassSubFilter: new (params: any) => StringFilter | NumberFilter | DateFilter | IdFilter) => (value: any) => void;
        handleResetFilter: () => void;
        handleUpdateNewFilter: (filter: TFilter) => void;
    };
    useStringFilter<T1Filter extends ModelFilter>(modelFilter: T1Filter, dispatch: (action: AdvanceFilterAction<T1Filter>) => void, fieldName: keyof T1Filter, fieldType: keyof StringFilter): [string, (value: string) => void];
    useAdvanceFilterRange<T1Filter extends ModelFilter, T2Filter extends ModelFilter>(modelFilter: T1Filter, dispatch: (action: AdvanceFilterAction<T1Filter, T2Filter>) => void, fieldName: keyof T1Filter, ClassFilter: new (partial?: any) => T2Filter): [[any, any], (valueRange: [any, any]) => void];
    useNumberFilter<T1Filter extends ModelFilter>(modelFilter: T1Filter, dispatch: (action: AdvanceFilterAction<T1Filter>) => void, fieldName: keyof T1Filter, fieldType: keyof NumberFilter): [number, (value: number) => void];
    useIdFilter<T1Filter extends ModelFilter>(modelFilter: T1Filter, dispatch: (action: AdvanceFilterAction<T1Filter>) => void, fieldName: keyof T1Filter, fieldType: keyof CoreFilter): [number, (id: number) => void];
    useDateFilter<T1Filter extends ModelFilter>(modelFilter: T1Filter, dispatch: (action: AdvanceFilterAction<T1Filter>) => void, fieldName: keyof T1Filter, fieldType: keyof DateFilter): [Dayjs, (date: Dayjs) => void];
    useNumberRangeFilter<T1Filter extends ModelFilter>(modelFilter: T1Filter, dispatch: (action: AdvanceFilterAction<T1Filter>) => void, fieldName: keyof T1Filter): [[number, number], (numberRange: [number, number]) => void];
    useDateRangeFilter<T1Filter extends ModelFilter>(modelFilter: T1Filter, dispatch: (action: AdvanceFilterAction<T1Filter>) => void, fieldName: keyof T1Filter): [[Dayjs, Dayjs], (dateRange: [Dayjs, Dayjs]) => void];
};
export {};
