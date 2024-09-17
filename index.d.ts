import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode, RefObject, PropsWithChildren, ButtonHTMLAttributes, SetStateAction, Dispatch } from 'react';
import { ValidateStatus as ValidateStatus$1, BORDER_TYPE as BORDER_TYPE$1, NUMBER_TYPE as NUMBER_TYPE$1, ADVANCE_DATE_RANGE_TYPE as ADVANCE_DATE_RANGE_TYPE$1, MODAL_SIZE as MODAL_SIZE$1, NUMBER_BUTTON as NUMBER_BUTTON$1, UPLOADTYPE_IMAGE as UPLOADTYPE_IMAGE$1 } from '@Configs/enum';
import { Model, ModelFilter } from 'react-3layer-common';
import { Observable } from 'rxjs';
import { DatePickerProps as DatePickerProps$1, TimePickerProps as TimePickerProps$1, ModalProps, PaginationProps as PaginationProps$1, RadioGroupProps, RadioProps } from 'antd';
import * as dayjs from 'dayjs';
import dayjs__default, { Dayjs } from 'dayjs';
import { RangePickerProps } from 'antd/lib/date-picker';
import { InputAction as InputAction$2 } from '@Components/Input/InputText/InputText';
import { DataNode, TreeProps as TreeProps$1 } from 'antd/lib/tree';
import { TreeNode as TreeNode$1 } from '@Components/Tree/TreeNode';
import { TFunction } from 'i18next';
import { InputNumberProps as InputNumberProps$1 } from '@Components/Input/InputNumber/InputNumber';
import { TabsProps as TabsProps$1, TabsType } from 'antd/lib/tabs';
import { TableProps } from 'antd/lib/table';
import { Key } from 'antd/lib/table/interface';

interface ValidateObject {
    validateStatus: ValidateStatus$1;
    message: string;
}
interface FormItemProps {
    /**Show the status validation*/
    validateStatus?: ValidateStatus$1;
    /**The validated message*/
    message?: string;
    children: ReactNode;
    /**Place content to the right*/
    placeRight?: boolean;
    /**Pass object validated to display state of  children field*/
    validateObject?: ValidateObject;
}
declare function FormItem(props: FormItemProps): react_jsx_runtime.JSX.Element;
declare namespace FormItem {
    var defaultProps: {
        placeRight: boolean;
    };
}

interface InputAction$1 {
    name?: ReactNode;
    action?: any;
}
interface InputTextProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Option to set password field */
    typeInput?: "text" | "password";
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Prefix for filter value*/
    prefix?: string | JSX.Element;
    /**Suffix for filter value*/
    suffix?: string | JSX.Element;
    /**User-filled value*/
    value?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Read only field*/
    readOnly?: boolean;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Use to custom style the component*/
    className?: string;
    /**Boolean to show the lenght of value user-filled*/
    showCount?: boolean;
    /**Set maximum length of value*/
    maxLength?: number;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Provide a custom action (onClick) to the component*/
    action?: InputAction$1;
    /**Handle the change value of the field*/
    onChange?: (T: string | null) => void;
    /**Handle onEnter action*/
    onEnter?: (T: string | null) => void;
    /**Handle onBlur action*/
    onBlur?: (T: string | null) => void;
    /**Handle onKeyDown action*/
    onKeyDown?: (event: any) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    autoComplete?: boolean;
    nameAttr?: string;
}
declare const InputText: React.ForwardRefExoticComponent<InputTextProps & React.RefAttributes<any>>;

interface InputNumberAction {
    name?: string;
    action?: any;
}
interface InputNumberProps {
    /**Label for current field*/
    label?: string;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**User-filled value*/
    value?: number;
    /**Prefix for filter value*/
    prefix?: string | ReactNode;
    /**Suffix for filter value*/
    suffix?: string | ReactNode;
    /**Allow value to be negative or not*/
    allowNegative?: boolean;
    /**Provide an option set decimal number type for value*/
    numberType?: NUMBER_TYPE$1;
    /**Reverse symbol “.” and “,”*/
    isReverseSymb?: boolean;
    /**Provide a length of number behind the point (character)*/
    decimalDigit?: number;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean /**Not allow to handle change value*/;
    /**Read only field*/
    readOnly?: boolean;
    /**Use to custom style the component*/
    className?: string;
    /**Min of the value number*/
    min?: number;
    /**Max of the value number*/
    max?: number;
    /** Provide a custom action (onClick) to the component */
    action?: InputNumberAction;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Handle the change value of the component*/
    onChange?: (T: number) => void;
    /**Handle onEnter action*/
    onEnter?: (T: number) => void;
    /**Handle onBlur action*/
    onBlur?: (T: number) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function InputNumber(props: InputNumberProps): react_jsx_runtime.JSX.Element;
declare namespace InputNumber {
    var defaultProps: {
        label: string;
        type: BORDER_TYPE$1;
        isSmall: boolean;
        isRequired: boolean;
        allowNegative: boolean;
        isReverseSymb: boolean;
        numberType: NUMBER_TYPE$1;
        decimalDigit: number;
        disabled: boolean;
        readOnly: boolean;
        prefix: string;
    };
}

interface InputSelectProps<T extends Model> {
    /**User-selected value*/
    value?: T;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /** Focus to input of inputSelect */
    expanded?: boolean;
    /** Set expand value */
    handlePressExpandedIcon?: () => void;
    /** Placeholder of the Component */
    placeHolder?: string;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Handle the action when click clear value*/
    onClear?: (T: T) => void;
    /**Handle action on search*/
    onSearch?: (T: string) => void;
    /**Handle onKeyDown action*/
    onKeyDown?: (event: any) => void;
    /**Handle onEnter action*/
    onKeyEnter?: (event: any) => void;
    /**Handle the action when clear input search*/
    handleClearInput?: () => void;
    /**Use to custom style the component*/
    className?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Label for current field*/
    label?: string;
    /** Show symbol * as required field */
    isRequired?: boolean;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**True for data list of filter is Enum (not use in code)*/
    isEnumerable?: boolean;
    /**Boolean true if used for filter*/
    isFilter?: boolean;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction$1;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function InputSelect(props: InputSelectProps<Model>): react_jsx_runtime.JSX.Element;
declare namespace InputSelect {
    var defaultProps: {
        render: typeof defaultRenderObject$d;
        expanded: boolean;
        disabled: boolean;
    };
}
declare function defaultRenderObject$d<T extends Model>(t: T): any;

interface InputTagProps<T extends Model> {
    /**List value users select*/
    listValue?: T[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Handle the action when click clear value*/
    onClear?: (T: T) => void;
    /**Handle the action when click clear mutiValue*/
    onClearMulti?: () => void;
    /**Handle action on search*/
    onSearch?: (T: string) => void;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Component enable to search data list*/
    isUsingSearch?: boolean;
    /**Handle onKeyDown action*/
    onKeyDown?: (event: any) => void;
    /**Handle onEnter action*/
    onKeyEnter?: (event: any) => void;
    /**Boolean true if used for filter*/
    isFilter?: boolean;
    /**Not expand the title row to see more detail on each post (each row)*/
    isNotExpand?: boolean;
    /**Boolean to set show tooltip */
    isShowTooltip?: boolean;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction$1;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /** Set expand value */
    handlePressExpandedIcon?: () => void;
    /**Clear search value when open */
    clearSearchTerm?: boolean;
}
declare function InputTag(props: InputTagProps<Model>): react_jsx_runtime.JSX.Element;
declare namespace InputTag {
    var defaultProps: {
        type: BORDER_TYPE$1;
        label: any;
        render: typeof defaultRenderObject$c;
    };
}
declare function defaultRenderObject$c<T extends Model>(t: T): any;

interface InputSearchProps<T extends Model, TModelFilter extends ModelFilter> {
    /**User-filled value to filter*/
    value?: string | null;
    /**Property of inputSearchSelect*/
    valueFilter?: TModelFilter;
    /**Property of inputSearchSelect*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Property of inputSearchSelect*/
    classFilter: new () => TModelFilter;
    /**Property of inputSearchSelect*/
    render?: (t: T) => string;
    /**Property of inputSearchSelect*/
    searchType?: string;
    /**Property of inputSearchSelect*/
    searchProperty?: string;
    /**Use to custom style the component*/
    className?: string;
    /**Property of inputSearchSelect*/
    onChangeSearchField?: (id: number, T?: T) => void;
    /**Handle the change value of the component*/
    onChange?: (value: string) => void;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Boolean to set input show with animation*/
    animationInput?: boolean;
    /**Option to set position for InputSearch */
    position?: "left" | "right";
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject$b<T extends Model>(t: T): any;
declare function InputSearch(props: InputSearchProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace InputSearch {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        render: typeof defaultRenderObject$b;
        animationInput: boolean;
    };
}

interface TextAreaAction {
    name?: string;
    action?: any;
}
interface TextAreaProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**User-filled value*/
    value?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Use to custom style the component*/
    className?: string;
    /**Boolean to show the lenght of value user-filled*/
    showCount?: boolean;
    /**Set maximum length of value*/
    maxLength?: number;
    /**Provide a custom action (onClick) to the component*/
    action?: TextAreaAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Handle the change value of the field*/
    onChange?: (T: string | null) => void;
    /**Handle onEnter action*/
    onEnter?: (T: string | null) => void;
    /**Handle onBlur action*/
    onBlur?: (T: string | null) => void;
}
declare function TextArea(props: TextAreaProps): react_jsx_runtime.JSX.Element;
declare namespace TextArea {
    var defaultProps: {
        label: string;
        type: BORDER_TYPE$1;
        isRequired: boolean;
        prefix: string;
        disabled: boolean;
        className: string;
        countWord: boolean;
        maxLength: number;
    };
}

interface InputAction {
    name?: ReactNode;
    action?: any;
}
interface InputViewProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL, NOT_BORDERED */
    type?: BORDER_TYPE$1;
    /**Prefix for filter value*/
    prefix?: string | JSX.Element;
    /**Show * as require field */
    isRequired?: boolean;
    disabled?: boolean;
    /**Suffix for filter value*/
    suffix?: string | JSX.Element;
    /**User-filled value*/
    value?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Use to custom style the component*/
    className?: string;
    /**Boolean to show the lenght of value user-filled*/
    showCount?: boolean;
    /**Set maximum length of value*/
    maxLength?: number;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Provide a custom action (onClick) to the component*/
    action?: InputAction;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare const InputView: React.ForwardRefExoticComponent<InputViewProps & React.RefAttributes<any>>;

interface InputRangeProps extends InputNumberProps {
    /**User-filled values*/
    valueRange: [number, number] | [];
    /**Placeholder of the component*/
    placeHolderRange?: [string, string];
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Handle the change [fromNumber, toNumber] of the component*/
    onChangeRange: (T: [number, number]) => void;
    /**Control the size of the component*/
    isSmall?: boolean;
}
declare function InputRange(props: InputRangeProps): react_jsx_runtime.JSX.Element;
declare namespace InputRange {
    var defaultProps: {
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE$1;
        isRequired: boolean;
        prefix: string;
        disabled: boolean;
        className: string;
        maxLength: number;
    };
}

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
    type?: BORDER_TYPE$1;
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
declare function DatePicker(props: DatePickerProps & DatePickerProps$1): react_jsx_runtime.JSX.Element;
declare namespace DatePicker {
    var defaultProps: {
        dateFormat: string[];
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE$1;
        isRequired: boolean;
        disabled: boolean;
        className: string;
    };
}

interface TimePickerAction {
    name?: string;
    action?: any;
}
interface TimePickerProps {
    /**User-selected time value*/
    value?: dayjs__default.Dayjs | any;
    /**Label for current field*/
    label?: string;
    /** Use to format the time selected */
    timeFormat?: string | any[];
    /** Handle the change value of the component */
    onChange?: (value: dayjs__default.Dayjs | null, timeString?: string) => void;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
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
declare function TimePicker(props: TimePickerProps & TimePickerProps$1): react_jsx_runtime.JSX.Element;
declare namespace TimePicker {
    var defaultProps: {
        isMaterial: boolean;
        timeFormat: string;
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE$1;
        isRequired: boolean;
        disabled: boolean;
        className: string;
    };
}

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
    typeCustomDate?: BORDER_TYPE$1;
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
declare function DateRange(props: DateRangeProps & RangePickerProps): react_jsx_runtime.JSX.Element;
declare namespace DateRange {
    var defaultProps: {
        dateFormat: string[];
        label: string;
        isSmall: boolean;
        typeCustomDate: BORDER_TYPE$1;
        isRequired: boolean;
        disabled: boolean;
        className: string;
    };
}

interface SelectProps$1<T extends Model, TModelFilter extends ModelFilter> {
    /**Value users select*/
    value?: Model;
    /**Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**True for data list  is Enum*/
    isEnumerable?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Api to get list data*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (id: number, T?: T) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TModelFilter;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Label for current field*/
    label?: string;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Title of button add new */
    selectWithAddTitle?: string;
    /** Control the size of the component */
    isSmall?: boolean;
    /**Prefer option to select*/
    preferOptions?: T[];
    /**Show maximum length of item in each data row*/
    maxLengthItem?: number;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction$2;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Use to custom style the component*/
    className?: string;
}
declare function defaultRenderObject$a<T extends Model>(t: T): any;
declare function Select(props: SelectProps$1<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace Select {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumerable: boolean;
        appendToBody: boolean;
        render: typeof defaultRenderObject$a;
        isMaterial: boolean;
        disabled: boolean;
        maxLengthItem: number;
    };
}

interface MultipleSelectProps<T extends Model, TFilter extends ModelFilter> {
    /**list value users select*/
    values?: Model[];
    /**Value filter for api get data option*/
    valueFilter?: TFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Api to get list data*/
    getList?: (TModelFilter?: TFilter) => Observable<T[]>;
    /**Handle the change value of the field*/
    onChange?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TFilter;
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Component enable to search data list*/
    isUsingSearch?: boolean;
    /**Prefer option to select*/
    preferOptions?: T[];
    /**Show maximum length of item in each data row*/
    maxLengthItem?: number;
    /**Set show tooltip or not */
    isShowTooltip?: boolean;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction$2;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Use to custom style the component*/
    className?: string;
}
declare function defaultRenderObject$9<T extends Model>(t: T): any;
declare function MultipleSelect(props: MultipleSelectProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace MultipleSelect {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumerable: boolean;
        render: typeof defaultRenderObject$9;
        isMaterial: boolean;
        disabled: boolean;
        maxLengthItem: number;
        isShowTooltip: boolean;
    };
}

interface SelectProps<T extends Model> {
    /**Value users select*/
    value?: Model;
    /**List value users select*/
    listValue?: Model[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change value*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Handle the change value of the field*/
    onChange?: (id: number, T?: T) => void;
    /**Handle the change list value of the component */
    onChangeMultiple?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Label for current field*/
    label?: string;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option to select*/
    preferOptions?: T[];
    /**Option to select multiple*/
    isMultiple?: boolean;
    /**Api to get list data*/
    getList?: () => Observable<T[]>;
    /**Custom height of dropdown data list*/
    height?: number;
    /** Provide a custom action (onClick) to the component */
    action?: InputAction$2;
    /**Show maximum length of item in each data row*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Use to custom style the component*/
    className?: string;
    /**Use to set time get list to call*/
    isLoadMultipleTimes?: boolean;
}
declare function defaultRenderObject$8<T extends Model>(t: T): any;
declare function EnumSelect(props: SelectProps<Model>): react_jsx_runtime.JSX.Element;
declare namespace EnumSelect {
    var defaultProps: {
        appendToBody: boolean;
        render: typeof defaultRenderObject$8;
        disabled: boolean;
        maxLengthItem: number;
    };
}

declare class TreeNode<T extends Model> implements DataNode {
    title: string;
    key: number;
    item: Model;
    children: TreeNode<T>[];
    disabled: boolean;
    constructor(value?: T);
}

interface TreeProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Item selected*/
    items?: Model[];
    /**List TreeNode data*/
    treeData?: TreeNode<T>[];
    /**Value filter for api getTreeData*/
    valueFilter?: TModelFilter;
    /**List key of node is expanding*/
    expandedKeys?: number[];
    /**List key of node checked*/
    checkedKeys?: number[];
    /**Switch to multiple check option*/
    checkable?: boolean;
    /**Key of selected node */
    selectedKey?: number;
    /**Not allow to select the father item that contain a lot of items inside*/
    onlySelectLeaf?: boolean;
    /**API to get data*/
    getTreeData?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Function to change selected items*/
    onChange?: (treeNode: TreeNode<T>[], disableChange?: boolean) => void;
    /**Provide a function to render a specific property as name*/
    render?: (treeNode: T) => string;
    /**Option to show add new button*/
    selectWithAdd?: () => void;
    /**Prefer node item of tree*/
    preferOptions?: T[];
    /**Show maximum length of each row item in tree (must pass value when render option return string)*/
    maxLengthItem?: number;
    /**Pass ref of list data select */
    selectListRef?: RefObject<any>;
    /** Prop of AntdTreeProps*/
    titleRender?: (T: T) => ReactNode;
    /** Option to collapse and expand tree data */
    isExpand?: boolean;
    /** Option to let user cant select the selected item in tree list */
    isDisableSelected?: boolean;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode$1<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
declare function Tree(props: TreeProps<Model, ModelFilter> & TreeProps$1): react_jsx_runtime.JSX.Element;
declare namespace Tree {
    var defaultProps: {
        classFilter: typeof ModelFilter;
        searchProperty: string;
        searchType: string;
    };
}

interface TreeSelectProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Title for filter field*/
    title?: string;
    /** User-selected values*/
    listItem?: Model[];
    /** User-selected value*/
    item?: Model;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /** An optional to multiple check filter values*/
    checkable?: boolean;
    /** Prop of AntdTreeProps*/
    selectable?: boolean;
    /**Check treeNode precisely; parent treeNode and children treeNodes are not associated*/
    checkStrictly?: boolean;
    /** Not allow to handle change filter*/
    disabled?: boolean;
    /** Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /** Placeholder of the component*/
    placeHolder?: string;
    /** Key of selected node */
    selectedKey?: number;
    /**Not allow to select the father item that contain a lot of items inside*/
    onlySelectLeaf?: boolean;
    /**Show symbol * as required field*/
    isRequired?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Provide a function to render a specific property as name*/
    render?: (T: T) => string;
    /** API to get data*/
    getTreeData?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /** Function to change selected items*/
    onChange?: (T: Model[], TT: boolean) => void;
    /** Model filter class of API get list data*/
    classFilter?: new () => TModelFilter;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /** Label for current field*/
    label?: string;
    /** Control the size of the component*/
    isSmall?: boolean;
    /** Prop of AntdTreeProps*/
    treeTitleRender?: (T: T) => ReactNode;
    /**Option show button add new*/
    selectWithAdd?: () => void;
    /**Component enable to search data list*/
    isUsingSearch?: boolean;
    /** Prefer node item of tree*/
    preferOptions?: T[];
    /** Show maximum length of item in each data row in tree*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "gray" | "white";
    /**Use to custom style the component*/
    className?: string;
    /** Option to let user cant select the selected item in tree list */
    isDisableSelected?: boolean;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode$1<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
declare function TreeSelect(props: TreeSelectProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace TreeSelect {
    var defaultProps: {
        placeHolder: string;
        searchProperty: string;
        searchType: string;
        classFilter: typeof ModelFilter;
        onlySelectLeaf: boolean;
        isMaterial: boolean;
        checkable: boolean;
        disabled: boolean;
        selectable: boolean;
        treeTitleRender: (t: any) => any;
        keyField: string;
    };
}

interface AdvanceIdFilterMasterProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Value users select*/
    value?: number | string;
    /**Label for current field*/
    label?: string;
    /**Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**True for data list of filter is Enum*/
    isEnumList?: boolean;
    /**Boolean set false if value is not an IdValue*/
    isIdValue?: boolean;
    /**Name of property to set value to if value is not an IdValue */
    typeRender?: string;
    /**Api to get list data filter*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (T: number, value?: T) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TModelFilter;
    /**Use to custom style the component*/
    className?: string;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Set maximum length of text to search*/
    maxLength?: number;
    /**Show maximum length of item of each item in the dropdown*/
    maxLengthItem?: number;
}
declare function defaultRenderObject$7<T extends Model>(t: T): any;
declare function AdvanceIdFilterMaster(props: AdvanceIdFilterMasterProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceIdFilterMaster {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumList: boolean;
        render: typeof defaultRenderObject$7;
        disabled: boolean;
        maxLength: number;
        maxLengthItem: number;
    };
}

interface AdvanceMultipleIdFilterMasterProps<T extends Model, TModelFilter extends ModelFilter> {
    /**list value users select*/
    values?: any[];
    /**Label for current field*/
    label?: string;
    /**Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**True for data list of filter is Enum*/
    isEnumList?: boolean;
    /**Api to get list data filter*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TModelFilter;
    /**Use to custom style the component*/
    className?: string;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Set maximum length of text to search*/
    maxLength?: number;
    /**Show maximum length of item of each item in the dropdown*/
    maxLengthItem?: number;
}
declare function defaultRenderObject$6<T extends Model>(t: T): string;
declare function AdvanceMultipleIdFilterMaster(props: AdvanceMultipleIdFilterMasterProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceMultipleIdFilterMaster {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumList: boolean;
        render: typeof defaultRenderObject$6;
        disabled: boolean;
        typeRender: string;
        isIdValue: boolean;
        maxLength: number;
    };
}

interface AdvanceDateRangeFilterMasterProps {
    /**Value [fromDate, toDate] users select*/
    value?: [dayjs__default.Dayjs, dayjs__default.Dayjs];
    /**Use to format the date selected*/
    dateFormat?: string[];
    /**Handle the change value of the component*/
    onChange?: (item?: any, value?: [dayjs__default.Dayjs, dayjs__default.Dayjs]) => void;
    /**Use to custom style the component*/
    className?: string;
    /**Not allow to handle change the component*/
    disabled?: boolean;
    /**Prop of DateRange Component*/
    typeCustomDate?: BORDER_TYPE$1;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Label for current field*/
    label?: string;
    /**Selected value of list value suggest*/
    activeItem?: any;
    /**Control the type of component: SHORT, INPUT */
    type?: ADVANCE_DATE_RANGE_TYPE$1;
    /**Prop of component InputSelect*/
    inputType?: BORDER_TYPE$1;
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
declare function AdvanceDateRangeFilterMaster(props: AdvanceDateRangeFilterMasterProps & RangePickerProps): react_jsx_runtime.JSX.Element;
declare namespace AdvanceDateRangeFilterMaster {
    var defaultProps: {
        dateFormat: string[];
        placeholder: string[];
        type: ADVANCE_DATE_RANGE_TYPE$1;
        placeHolderSelect: string;
        appendToBody: boolean;
        bgColor: string;
    };
}

interface AdvanceEnumMasterProps<T extends Model> {
    /**Value users select*/
    value?: number | string;
    /**List value users select*/
    listValue?: number[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change the component*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Handle the change value of the component*/
    onChange?: (id: number, T?: T) => void;
    /**Handle the change list value of the component */
    onChangeMultiple?: (ids?: [], selectedList?: T[]) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Label for current field*/
    label?: string;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Option to select multiple*/
    isMultiple?: boolean;
    /**Api to get list data filter*/
    getList?: () => Observable<T[]>;
    /**Use to custom style the component*/
    className?: string;
    /**Show maximum length of item of each item in the dropdown*/
    maxLengthItem?: number;
    /**Custom height of dropdown data list*/
    height?: number;
}
declare function defaultRenderObject$5<T extends Model>(t: T): any;
declare function AdvanceEnumFilterMaster(props: AdvanceEnumMasterProps<Model>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceEnumFilterMaster {
    var defaultProps: {
        appendToBody: boolean;
        render: typeof defaultRenderObject$5;
        disabled: boolean;
    };
}

interface AdvanceTreeFilterMasterProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Label for current field*/
    label?: string;
    /**User-selected values*/
    listItem?: Model[];
    /**User-selected value*/
    item?: Model;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**An optional to multiple check filter values*/
    checkable?: boolean;
    /**Prop of AntdTreeProps*/
    selectable?: boolean;
    /**Check treeNode precisely; parent treeNode and children treeNodes are not associated*/
    checkStrictly?: boolean;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Key of selected node */
    selectedKey?: number;
    /**Not allow to select the father item that contain a lot of items inside*/
    onlySelectLeaf?: boolean;
    /**API to get data*/
    getTreeData?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Function to change selected items*/
    onChange?: (T: Model[], TT: boolean) => void;
    /**Model filter class of API get list data*/
    classFilter?: new () => TModelFilter;
    /**Provide a function to render a specific property as name*/
    render?: (T: T) => string;
    /**Prefer node item of tree*/
    preferOptions?: T[];
    /**Set maximum length of text to search*/
    maxLength?: number;
    /**Set maximum length of data name display in each row of tree*/
    maxLengthItem?: number;
    /**Use to custom style the component*/
    className?: string;
    /** Prop of AntdTreeProps*/
    treeTitleRender?: (T: T) => ReactNode;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode$1<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
declare function AdvanceTreeFilterMaster(props: AdvanceTreeFilterMasterProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceTreeFilterMaster {
    var defaultProps: {
        placeHolder: string;
        searchProperty: string;
        searchType: string;
        classFilter: typeof ModelFilter;
        onlySelectLeaf: boolean;
        checkable: boolean;
        disabled: boolean;
        selectable: boolean;
        treeTitleRender: (t: any) => any;
        keyField: string;
    };
}

interface TagFilterProps {
    /**Use to custom style the component*/
    className?: string;
    /**Current value filter*/
    value?: ModelFilter;
    /**KeyWord of data file to be translated*/
    keyTranslate?: string;
    /** Set fields that not display value filter*/
    hiddenField?: string[];
    /**Fields that icon clear is disabled*/
    exceptField?: string[];
    /**Provide a prop to show filter field mapping*/
    mappingField?: {
        [key: string]: string;
    };
    /**Provide a translate function*/
    translate?: TFunction;
    /**Handle the action when click clear filter*/
    onClear?: (t: any) => void;
    /**Handle the change value of the component*/
    handleChangeFilter?: (valueFilter: ModelFilter) => void;
}
declare function TagFilter(props: TagFilterProps): react_jsx_runtime.JSX.Element;

interface AdvanceIdFilterProps<T extends Model, TModelFilter extends ModelFilter> {
    /**Value users select*/
    value?: Model;
    /**Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Api to get list data filter*/
    getList?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (id: number, T?: T) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TModelFilter;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Label for current field*/
    label?: string;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Set maximum length of each data row to render*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject$4<T extends Model>(t: T): any;
declare function AdvanceIdFilter(props: AdvanceIdFilterProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceIdFilter {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        appendToBody: boolean;
        render: typeof defaultRenderObject$4;
        disabled: boolean;
        maxLengthItem: number;
        bgColor: string;
    };
}

interface AdvanceIdMultipleFilterProps<T extends Model, TFilter extends ModelFilter> {
    /**list value users select*/
    values?: Model[];
    /**Value filter for api get data option*/
    valueFilter?: TFilter;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Api to get list data filter*/
    getList?: (TModelFilter?: TFilter) => Observable<T[]>;
    /**Handle the change value of the component*/
    onChange?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Model filter class of API get list data*/
    classFilter: new () => TFilter;
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Append this component to body*/
    appendToBody?: boolean;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject$3<T extends Model>(t: T): any;
declare function AdvanceIdMultipleFilter(props: AdvanceIdMultipleFilterProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceIdMultipleFilter {
    var defaultProps: {
        searchProperty: string;
        searchType: string;
        isEnumerable: boolean;
        render: typeof defaultRenderObject$3;
        disabled: boolean;
        bgColor: string;
    };
}

interface AdvanceEnumProps<T extends Model> {
    /**Value users select*/
    value?: Model;
    /**List value users select*/
    listValue?: Model[];
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change the component*/
    disabled?: boolean;
    /**Append this component to body*/
    appendToBody?: boolean;
    /**Handle the change value of the component*/
    onChange?: (id: number, T?: T) => void;
    /**Handle the change list value of the component */
    onChangeMultiple?: (selectedList?: T[], ids?: []) => void;
    /**Provide a function to render a specific property as name*/
    render?: (t: T) => string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Label for current field*/
    label?: string;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Prefer option filter to select*/
    preferOptions?: T[];
    /**Option to select multiple*/
    isMultiple?: boolean;
    /**Api to get list data filter*/
    getList?: () => Observable<T[]>;
    /**Custom height of dropdown data list*/
    height?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function defaultRenderObject$2<T extends Model>(t: T): any;
declare function AdvanceEnumFilter(props: AdvanceEnumProps<Model>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceEnumFilter {
    var defaultProps: {
        appendToBody: boolean;
        render: typeof defaultRenderObject$2;
        disabled: boolean;
        bgColor: string;
    };
}

interface AdvanceNumberProps {
    /**Label for current field*/
    label?: string;
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**User-filled value*/
    value?: number;
    /**Prefix for filter value*/
    prefix?: string | ReactNode;
    /**Suffix for filter value*/
    suffix?: string | ReactNode;
    /**Allow values to be negative not*/
    allowPositive?: boolean;
    /**Provide an option set decimal number type for value filter*/
    numberType?: NUMBER_TYPE$1;
    /**Reverse symbol “.” and “,”*/
    isReverseSymb?: boolean;
    /**Provide a length of number behind the point (character)*/
    decimalDigit?: number;
    /**Placeholder of the component*/
    placeHolder?: string;
    /**Not allow to handle change filter*/
    disabled?: boolean;
    /**Use to custom style the component*/
    className?: string;
    /**Min of the value number*/
    min?: number;
    /**Max of the value number*/
    max?: number;
    /**Control the size of the component*/
    isSmall?: boolean;
    /**Handle the change value filter of the component*/
    onChange?: (T: number) => void;
    /**Handle onEnter action*/
    onEnter?: (T: number) => void;
    /**Handle onBlur action*/
    onBlur?: (T: number) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gary";
}
declare function AdvanceNumberFilter(props: AdvanceNumberProps): react_jsx_runtime.JSX.Element;
declare namespace AdvanceNumberFilter {
    var defaultProps: {
        label: string;
        type: BORDER_TYPE$1;
        isSmall: boolean;
        allowPositive: boolean;
        isReverseSymb: boolean;
        numberType: NUMBER_TYPE$1;
        decimalDigit: number;
        disabled: boolean;
        prefix: string;
        bgColor: string;
    };
}

interface AdvanceInputRangeFilterProps extends InputNumberProps$1 {
    /**[filterValueFrom, filterValueTo] of filter*/
    valueRange: [number, number] | [];
    /**Placeholder of the component*/
    placeHolderRange?: [string, string];
    /**Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /**Handle the change values of the component*/
    onChangeRange: (T: [number, number]) => void;
    /**Control the size of the component*/
    isSmall?: boolean;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare function AdvanceInputRangeFilter(props: AdvanceInputRangeFilterProps): react_jsx_runtime.JSX.Element;
declare namespace AdvanceInputRangeFilter {
    var defaultProps: {
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE$1;
        prefix: string;
        disabled: boolean;
        className: string;
        maxLength: number;
        bgColor: string;
    };
}

interface AdvanceStringFilterProps {
    /** Label for current field */
    label?: string;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL  */
    type?: BORDER_TYPE$1;
    /** Prefix for filter value */
    prefix?: string | JSX.Element;
    /** Suffix for filter value */
    suffix?: string | JSX.Element;
    /** User-filled value */
    value?: string;
    /** Not allow to handle change filter */
    disabled?: boolean;
    /** Placeholder of the component */
    placeHolder?: string;
    /** Use to custom style the component */
    className?: string;
    /** Set maximum length of value filter */
    maxLength?: number;
    /** Control the size of the component */
    isSmall?: boolean;
    /** Handle the change value filter of the component */
    onChange?: (T: string | null) => void;
    /** Handle onEnter action */
    onEnter?: (T: string | null) => void;
    /** Handle onBlur action */
    onBlur?: (T: string | null) => void;
    /** Handle onKeyDown action */
    onKeyDown?: (event: any) => void;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
}
declare const AdvanceStringFilter: React.ForwardRefExoticComponent<AdvanceStringFilterProps & React.RefAttributes<any>>;

interface AdvanceTreeFilterProps<T extends Model, TModelFilter extends ModelFilter> {
    /** User-selected values*/
    listItem?: Model[];
    /** User-selected value*/
    item?: Model;
    /**The property name of the model filter you want to search in the list data*/
    searchProperty?: string;
    /**The type of searchProperty you want to search in the list data*/
    searchType?: string;
    /** An optional to multiple check filter values*/
    checkable?: boolean;
    /** Prop of AntdTreeProps*/
    selectable?: boolean;
    /**Check treeNode precisely; parent treeNode and children treeNodes are not associated*/
    checkStrictly?: boolean;
    /** Not allow to handle change filter*/
    disabled?: boolean;
    /** Value filter for api get data option*/
    valueFilter?: TModelFilter;
    /** Placeholder of the component*/
    placeHolder?: string;
    /** Key of selected node */
    selectedKey?: number;
    /**Not allow to select the father item that contain a lot of items inside*/
    onlySelectLeaf?: boolean;
    /** Provide a function to render a specific property as name*/
    render?: (T: T) => string;
    /** API to get data*/
    getTreeData?: (TModelFilter?: TModelFilter) => Observable<T[]>;
    /** Function to change selected items*/
    onChange?: (T: Model[], TT: boolean) => void;
    /** Model filter class of API get list data*/
    classFilter?: new () => TModelFilter;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /** Label for current field*/
    label?: string;
    /** Control the size of the component*/
    isSmall?: boolean;
    /** Prop of AntdTreeProps*/
    treeTitleRender?: (T: T) => string;
    /** Prefer node item of tree*/
    preferOptions?: T[];
    /** Set maximum length of each data row to render*/
    maxLengthItem?: number;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /**Append this component to body*/
    appendToBody?: boolean;
    /** Option to let developer can modify tree data */
    buildTree?: (flatData: Model[]) => [TreeNode$1<Model>[], number[]];
    /** Key property when you want to customize build tree object */
    keyField?: string;
}
declare function AdvanceTreeFilter(props: AdvanceTreeFilterProps<Model, ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace AdvanceTreeFilter {
    var defaultProps: {
        placeHolder: string;
        searchProperty: string;
        searchType: string;
        classFilter: typeof ModelFilter;
        onlySelectLeaf: boolean;
        checkable: boolean;
        disabled: boolean;
        selectable: boolean;
        bgColor: string;
        treeTitleRender: (t: any) => any;
        keyField: string;
    };
}

interface AdvanceDateFilterProps {
    /** Value users select */
    value?: dayjs.Dayjs;
    /** Label for current field */
    label?: string;
    /** Use to format the date selected */
    dateFormat?: string[];
    /** Handle the change value of the component */
    onChange?: (value: dayjs.Dayjs | null, dateString?: string) => void;
    /** Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL */
    type?: BORDER_TYPE$1;
    /** Control the size of the component */
    isSmall?: boolean;
    /** Not allow to handle change the component */
    disabled?: boolean;
    /** Use to custom style the component */
    className?: string;
    /** Placeholder of the component */
    placeholder?: string;
    /** Custom background color for component: "white" || "gray" */
    bgColor?: "white" | "gray";
    /** Set unique class for popup calendar */
    uniquePopupClassName?: string;
}
declare function AdvanceDateFilter(props: AdvanceDateFilterProps & DatePickerProps$1): react_jsx_runtime.JSX.Element;
declare namespace AdvanceDateFilter {
    var defaultProps: {
        dateFormat: string[];
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE$1;
        isRequired: boolean;
        disabled: boolean;
        className: string;
        bgColor: string;
    };
}

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
    type?: BORDER_TYPE$1;
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
declare function AdvanceDateRangeFilter(props: AdvanceDateRangeFilterProps & RangePickerProps): react_jsx_runtime.JSX.Element;
declare namespace AdvanceDateRangeFilter {
    var defaultProps: {
        dateFormat: string[];
        label: string;
        isSmall: boolean;
        type: BORDER_TYPE$1;
        isRequired: boolean;
        disabled: boolean;
        className: string;
        bgColor: string;
    };
}

type ButtonType = "primary" | "secondary" | "danger" | "outline-primary" | "outline-danger" | "ghost" | "ghost-primary" | "ghost-secondary" | "bleed-primary" | "bleed-secondary" | "link-plain" | "link" | "icon-only-primary" | "icon-only-outline-primary" | "icon-only-danger" | "icon-only-outline-danger" | "icon-only-ghost";
interface ButtonProps {
    /**Change the design of button*/
    type?: ButtonType;
    /**Is the button loading or not*/
    loading?: boolean;
    /**Type of component – button*/
    htmlType?: ButtonHTMLAttributes<any>["type"];
    /**Pass the classname to change the style of button*/
    className?: string;
    /**Function to be called when the button is clicked*/
    onClick?: ButtonHTMLAttributes<any>["onClick"];
    children?: ReactNode;
    /**Disabled state of button*/
    disabled?: boolean;
    /**Set the icon of button*/
    icon?: JSX.Element;
}
declare const Button: {
    (props: PropsWithChildren<ButtonProps>, ref: React.Ref<any>): react_jsx_runtime.JSX.Element;
    defaultProps: {
        type: string;
        htmlType: string;
        disabled: boolean;
    };
};

interface IconLoadingProps {
    /** Size of icon */
    size?: number;
    /** Color of icon */
    color?: string;
}
declare function IconLoading(props: IconLoadingProps): react_jsx_runtime.JSX.Element;
declare namespace IconLoading {
    var defaultProps: {
        size: number;
        color: string;
    };
}

interface InlineLoadingProps {
    /**Pass the classname to change the style inline loading */
    className?: string;
    /**State of inline loading*/
    status?: "default" | "submitting" | "submitted" | "error";
    /**Title for status submitting*/
    titleLoading?: string;
    /**Title for status submitted*/
    titleSubmitted?: string;
    /**Title for status error*/
    titleError?: string;
}
declare const InlineLoading: {
    (props: PropsWithChildren<InlineLoadingProps>): react_jsx_runtime.JSX.Element;
    defaultProps: {
        status: string;
        titleLoading: string;
        titleSubmitted: string;
        titleError: string;
    };
};

interface ModalCustomProps extends ModalProps {
    children?: ReactNode;
    /**Is the modal footer (cancel, apply, apply next button) visible or not*/
    visibleFooter?: boolean;
    /**Change the size of modal*/
    size?: MODAL_SIZE$1;
    /**Name of apply button*/
    titleButtonApply?: string;
    /**Name of apply next button*/
    titleButtonApplyNext?: string;
    /**Name of cancel button*/
    titleButtonCancel?: string;
    /**Cancel the form*/
    handleCancel?: (event: any) => void;
    /**Save the form*/
    handleSave?: (event: any) => void;
    /**Apply and process to next form*/
    handleApplyNext?: (event: any) => void;
    /**Pass state of loading */
    loadingType?: "default" | "submitting" | "submitted" | "error";
}
declare function Modal(props: ModalCustomProps): react_jsx_runtime.JSX.Element;
declare namespace Modal {
    var defaultProps: {
        size: MODAL_SIZE$1;
        destroyOnClose: boolean;
        loadingType: string;
    };
}

interface NonModalCustomProps extends ModalProps {
    /**State open or close of non-modal component */
    open?: boolean;
    /**Children content of component */
    children?: ReactNode;
    /**Is the modal footer (cancel, apply, apply next button) visible or not*/
    visibleFooter?: boolean;
    /**Change the size of modal*/
    size?: MODAL_SIZE$1;
    /**Name of apply button*/
    titleButtonApply?: string;
    /**Name of apply next button*/
    titleButtonApplyNext?: string;
    /**Name of cancel button*/
    titleButtonCancel?: string;
    /**Cancel the form*/
    handleCancel?: (event: any) => void;
    /**Save the form*/
    handleSave?: (event: any) => void;
    /**Apply and process to next form*/
    handleApplyNext?: (event: any) => void;
    /**Pass state of loading */
    loadingType?: "default" | "submitting" | "submitted" | "error";
    /**Pass value for element is draggable **/
    uniqueWrapClass?: string;
}
declare function NonModal(props: NonModalCustomProps): react_jsx_runtime.JSX.Element;
declare namespace NonModal {
    var defaultProps: {
        size: MODAL_SIZE$1;
        destroyOnClose: boolean;
        loadingType: string;
    };
}

interface TearSheetProps extends ModalProps {
    children?: ReactNode;
    /**Is the modal footer (cancel, save button) visible or not*/
    visibleFooter?: boolean;
    /**Name of save button*/
    titleButtonSave?: string;
    /**Name of cancel button*/
    titleButtonCancel?: string;
    /**Cancel the form*/
    handleCancel?: (event: any) => void;
    /**Save the form*/
    handleSave?: (event: any) => void;
    /**Pass state of loading */
    loadingType?: "default" | "submitting" | "submitted" | "error";
    /**Pass the classname to change the style component*/
    className?: string;
    /**Control the TearSheet visible or not*/
    visible?: boolean;
    /**Title of header TearSheet */
    title?: string;
    /**Description of header TearSheet  */
    description?: string;
    /**Additional content of header TearSheet  */
    additionalContent?: string;
}
declare function TearSheet(props: TearSheetProps): react_jsx_runtime.JSX.Element;
declare namespace TearSheet {
    var defaultProps: {
        titleButtonSave: string;
        titleButtonCancel: string;
        visibleFooter: boolean;
        loadingType: string;
    };
}

interface DrawerProps {
    children?: ReactNode;
    /**Control the drawer visible or not*/
    visible?: boolean;
    /**Control the footer of drawer visible or not*/
    visibleFooter?: boolean;
    /**Control the disable state of Apply button and Apply button*/
    disableButton?: boolean;
    /**Control the loading state of the drawer*/
    loading?: boolean;
    /**The title for drawer*/
    title?: ReactNode;
    /**The description for title*/
    description?: ReactNode;
    /**The title of Apply button*/
    titleButtonApply?: string;
    /**The title of ApplyNext button*/
    titleButtonApplyNext?: string;
    /**The title of cancel button*/
    titleButtonCancel?: string;
    /**Control number button of footer drawer*/
    numberButton?: NUMBER_BUTTON$1;
    /**Function to be called when user click close icon*/
    handleClose?: () => void;
    /**Function to be called when user click cancel button*/
    handleCancel?: () => void;
    /**Function to be called when user click Apply button. After click the drawer will be closed*/
    handleSave?: () => void;
    /**Function to be called when user click submit button ApplyNext*/
    handleApplyNext?: () => void;
    /**Control close icon visible or not*/
    isHaveCloseIcon?: boolean;
    /**Control the size of drawer*/
    size?: "sm" | "lg" | "xl" | "2xl" | "max";
    /**Control the size of drawer*/
    side?: "left" | "right";
    /**Use to custom style the component*/
    className?: string;
}
declare function Drawer(props: DrawerProps): react_jsx_runtime.JSX.Element;
declare namespace Drawer {
    var defaultProps: {
        visibleFooter: boolean;
        disableButton: boolean;
        numberButton: NUMBER_BUTTON$1;
        isHaveCloseIcon: boolean;
        size: string;
        side: string;
    };
}

interface FileLoadingContentProps {
    /**Pass file loading */
    file?: FileModel$2;
    /**Use to custom style the component*/
    className?: string;
}
declare function FileLoadingContent(props: FileLoadingContentProps): react_jsx_runtime.JSX.Element;
declare namespace FileLoadingContent {
    var defaultProps: {
        loadingFiles: any[];
    };
}

interface FileLoadedContentProps {
    /**Pass list file loaded */
    file?: FileModel$2;
    /**Function use to remove file */
    removeFile?: (fileId: string | number) => void;
    /**Option to set component have only view mode */
    isViewMode?: boolean;
    /**Use to custom style the component*/
    className?: string;
}
declare function FileLoadedContent(props: FileLoadedContentProps): react_jsx_runtime.JSX.Element;
declare namespace FileLoadedContent {
    var defaultProps: {
        loadedFiles: any[];
    };
}

interface FileModel$2 {
    id?: number;
    fileId?: string | number;
    name?: string;
    url?: string;
    appUserId?: number;
    rowId?: string;
    content?: string;
    mimeType?: string;
    isFile?: boolean;
    key?: any;
    path?: string;
    level?: number;
    isDelete?: boolean;
    clearAction?: (fileId: string | number) => void;
    handleInput?: (e: any) => void;
}
interface UploadFileProps {
    /**Option for multiple UploadFile */
    isMultiple?: boolean;
    /**Content of UploadFile component */
    uploadContent?: string;
    /**Function change list file uploaded */
    updateList?: (files: FileModel$2[]) => void;
    /**API use to upload list file selected to server*/
    uploadFile?: (files: File[] | Blob[]) => Observable<FileModel$2[]>;
    /**Option change style UploadFile to OutLine */
    isBtnOutLine?: boolean;
    /**Option limit maximum size (b) of list file to upload to server */
    maximumSize?: number;
    /** Option to change style of upload  "link", "button", "dragAndDrop"*/
    type?: "link" | "button" | "dragAndDrop";
    /**Icon of component */
    icon?: ReactNode;
    /**Option to set component have only view mode */
    isViewMode?: boolean;
    /**Function to set list file in status loading */
    setListFileLoading?: React.Dispatch<SetStateAction<FileModel$2[]>>;
    /**Use to custom style the component*/
    className?: string;
}
declare function UploadFile(props: UploadFileProps): react_jsx_runtime.JSX.Element;
declare namespace UploadFile {
    var FileLoadedContent: typeof FileLoadedContent;
    var FileLoadingContent: typeof FileLoadingContent;
    var defaultProps: {
        isMultiple: boolean;
        uploadContent: string;
        files: any[];
        isBtnOutLine: boolean;
        maximumSize: number;
    };
}

declare class File$1 extends Model {
    id?: number;
    name?: string;
    url?: string;
    appUserId?: number;
    extension?: string;
    size?: number;
    rowId?: string;
    error?: string;
}
interface FileModel$1 extends File$1 {
    content?: string;
    mimeType?: string;
    isFile?: boolean;
    key?: any;
    path?: string;
    level?: number;
    isDelete?: boolean;
    clearAction?: (fileId: string | number) => void;
    handleInput?: (e: any) => void;
}
interface UploadImageProps {
    /** Option to change style of upload  IMAGE, AVATAR*/
    type?: UPLOADTYPE_IMAGE$1;
    /**Auto upload image */
    autoUpload?: boolean;
    /**Option for multiple UploadImage */
    isMultiple?: boolean;
    /**Option for minimized size UploadImage */
    isMinimized?: boolean;
    /**List image uploaded*/
    files?: FileModel$1[];
    /**Function change list image uploaded */
    updateList?: (files: FileModel$1[]) => void;
    /**API use to upload list image selected to server*/
    uploadFile?: (files: File$1[] | Blob[]) => Observable<FileModel$1[]>;
    /**Icon of component */
    icon?: ReactNode;
    /**Url of avatar for type UPLOADTYPE_IMAGE.AVATAR */
    currentAvatar?: string;
    /**API upload image to server for type UPLOADTYPE_IMAGE.AVATAR */
    uploadAvatar?: (file: File$1 | Blob) => Observable<FileModel$1>;
    /**Function change currentAvatar for type UPLOADTYPE_IMAGE.AVATAR */
    updateAvatar?: (files: FileModel$1) => void;
    /**Function use to remove image */
    removeFile?: (fileId?: string | number) => Observable<boolean>;
    /**Option change size of UploadImage */
    size?: "lg" | "md" | "sm" | "xs";
    /**Use to custom style the component*/
    className?: string;
    /**Option limit maximum size (b) of list image to upload to server */
    maximumSize?: number;
}
declare function UploadImage(props: UploadImageProps): react_jsx_runtime.JSX.Element;
declare namespace UploadImage {
    var defaultProps: {
        type: UPLOADTYPE_IMAGE$1;
        isMultiple: boolean;
        isMinimized: boolean;
        autoUpload: boolean;
        size: string;
        maximumSize: number;
    };
}

interface ProgressIndicatorContentProps {
    children: ReactNode;
    /**Set max height of view cover content */
    height?: number;
    /**Set max width of view cover content */
    width?: number;
    /**Set contentId so ProgressIndicator can control data view/action scroll */
    contentId?: string;
    /**Use to custom style the component*/
    className?: string;
}
declare function ProgressIndicatorContent(props: ProgressIndicatorContentProps): react_jsx_runtime.JSX.Element;
declare namespace ProgressIndicatorContent {
    var defaultProps: {
        height: number;
    };
}

interface ProgressIndicatorModel {
    sectionName?: string;
    sectionId?: number;
}
interface ProgressIndicatorProps {
    /**Pass list section [{sectionName,sectionId}] */
    list?: ProgressIndicatorModel[];
    /**Pass Id of ProgressIndicatorContent to control action scroll */
    idContainer?: string;
    /**An option to set  vertical or horizontal type*/
    type?: "vertical" | "horizontal";
    /**Use to custom style the component*/
    className?: string;
}
declare const ProgressIndicator: {
    (props: ProgressIndicatorProps): react_jsx_runtime.JSX.Element;
    Content: typeof ProgressIndicatorContent;
    defaultProps: {
        list: any[];
        type: string;
    };
};

declare class Message extends Model {
    id?: number;
    discussionId: string;
    content?: string;
    mobileContent?: string;
    creatorId?: number;
    createdAt?: Dayjs;
    updatedAt?: Dayjs;
    deletedAt?: Dayjs;
    creator?: Creator;
    isOwner?: boolean;
    isPopup?: boolean;
    constructor(message?: Message);
}
declare class Creator extends Model {
    id?: number;
    userName?: string;
    displayName?: string;
    avatar?: string;
}
declare class FileModel extends Model {
    id: number;
    key?: string;
    name?: string;
    content?: string;
    mimetype?: string;
    isFile?: boolean;
    path?: string;
    level?: number;
}

interface CommentProps<TFilter extends ModelFilter> {
    /**Creator of comment*/
    userInfo: Creator;
    /**Option to prevent comment submission*/
    canSend?: boolean;
    /**Placeholder of input comment*/
    placeholder?: string;
    /**Title above of comment component*/
    title?: string;
    /**Title of button save comment*/
    titleSave?: string;
    /**Title of button cancel comment*/
    titleCancel?: string;
    /**Id of this discussion*/
    discussionId: string;
    /**Set true to show the title of comment component*/
    isShowHeader: boolean;
    /**ModelFilter of param of API use for get list comment*/
    classFilter?: new () => TFilter;
    /**API get list of comment/chat*/
    getMessages?: (TModelFilter?: TFilter) => Observable<Message[]>;
    /**API get quantity of comment/chat*/
    countMessages?: (TModelFilter?: TFilter) => Observable<number>;
    /**API to submit new comment/chat*/
    postMessage?: (Message: Message) => Observable<Message>;
    /**API for edit a comment existed*/
    updateMessage?: (Message: Message) => Observable<Message>;
    /**Boolean attribute to control editable comment existed*/
    canEditMessage?: boolean;
    /**API use when you what to delete a comment*/
    deleteMessage?: (Message: Message) => Observable<boolean>;
    /**API show list suggest of user when you enter @ and want to tag someone to this comment*/
    suggestList?: (filter: TFilter) => Observable<Model[]>;
    /**API call when you want to save file to server and save it to this comment*/
    attachFile?: (File: File) => Observable<FileModel>;
}
declare function Comment(props: CommentProps<ModelFilter>): react_jsx_runtime.JSX.Element;
declare namespace Comment {
    var defaultProps: {
        isShowHeader: boolean;
        placeholder: string;
        titleSave: string;
        titleCancel: string;
        title: string;
        canSend: boolean;
        canEditMessage: boolean;
    };
}

interface TabsProps extends TabsProps$1 {
    /**Option change tab styling */
    mode?: TabsType;
    /**List key of error tab */
    tabErrorKeys?: string[];
    /**Option for change background color tab to white  */
    lightColor?: boolean;
}
declare function Tabs(props: TabsProps): react_jsx_runtime.JSX.Element;
declare namespace Tabs {
    var defaultProps: {
        mode: string;
    };
}

interface StandardTableCustomProps extends TableProps<any> {
    /**Option pass id of table */
    idContainer?: string;
    /**Table is draggable */
    isDragable?: boolean;
    /**Used to change style table */
    className?: string;
    /**Control the row height of the table */
    tableSize?: "lg" | "md" | "sm";
    /**Control the spinning of the table */
    spinning?: boolean;
}
declare function StandardTable(props: StandardTableCustomProps): react_jsx_runtime.JSX.Element;
declare namespace StandardTable {
    var defaultProps: {
        spinning: boolean;
        isExpandable: boolean;
        tableSize: string;
        isLevel2: boolean;
        pagination: boolean;
    };
}

interface ActionBarComponentProps {
    children?: ReactNode;
    /** SelectedRowKeys of table */
    selectedRowKeys?: Key[];
    /** SetSelectedRowKeys of table*/
    setSelectedRowKeys?: Dispatch<SetStateAction<Key[]>>;
    /**Handle cancel selection */
    handleCancelAction?: () => void;
    /**Row selection */
    rowSelections?: any;
    translateSelected?: string;
    translateLine?: string;
    /** Translate name of button cancel */
    translateTitleCancelButton?: string;
}
declare function ActionBarComponent(props: ActionBarComponentProps): react_jsx_runtime.JSX.Element;
declare namespace ActionBarComponent {
    var defaultProps: {
        selectedRowKeys: any[];
        translateSelected: string;
        translateLine: string;
        translateTitleCancelButton: string;
    };
}

interface LayoutCellProps {
    /**Used to change style Component */
    className?: string;
    /** Use to custom padding of each cell */
    orderType?: "left" | "right" | "center";
    /** Option to align display value */
    position?: "left" | "right" | "center";
    children: ReactNode;
    /**Pass table size */
    tableSize?: "lg" | "md" | "sm";
}
declare function LayoutCell(props: LayoutCellProps): react_jsx_runtime.JSX.Element;
declare namespace LayoutCell {
    var defaultProps: {
        orderType: string;
        tableSize: string;
        position: string;
    };
}

interface LayoutHeaderProps {
    /**Used to change style Component */
    className?: string;
    /** Use to custom padding of each header column */
    orderType?: "left" | "right" | "center";
    /** Option to align display value */
    position?: "left" | "right" | "center";
    /** Title of header */
    title?: string;
    /** Maxlength of title to display */
    maxLength?: number;
    /** Boolean to check if column is sorting */
    isSorter?: boolean;
    /** Option to add state of sorting */
    sortedColumn?: any;
}
declare function LayoutHeader(props: LayoutHeaderProps): react_jsx_runtime.JSX.Element;
declare namespace LayoutHeader {
    var defaultProps: {
        orderType: string;
        position: string;
    };
}

interface PaginationProps extends PaginationProps$1 {
    /**Current page is skipped */
    skip?: number;
    /**Number of records to get in current page */
    take?: number;
    /**Used to custom the page size options */
    pageSizeOptions: number[];
    /**Function to change current page */
    onChange?: (skip: number, take: number) => void;
    /**False to hide option to change the page size */
    canChangePageSize?: boolean;
}
declare function Pagination(props: PaginationProps): react_jsx_runtime.JSX.Element;
declare namespace Pagination {
    var defaultProps: {
        pageSizeOptions: number[];
        skip: number;
        take: number;
        total: number;
        canChangePageSize: boolean;
    };
}

interface BadgeTextProps {
    /**Used to change style of badge text */
    className?: string;
    /**Value to display */
    value?: string;
    /**Background color to display */
    backgroundColor?: string;
    /**Customer value color */
    color?: string;
    /**Max length of display value */
    countCharacters?: number;
}
declare function BadgeText(props: BadgeTextProps): react_jsx_runtime.JSX.Element;
declare namespace BadgeText {
    var defaultProps: {
        avatar: any;
        icon: any;
    };
}

interface OneLineTextProps {
    /**Used to change style Component */
    className?: string;
    /**URL of avatar to display */
    avatar?: string;
    /**Shape option of avatar*/
    avatarType?: "circle" | "square";
    /**Size of avatar to display */
    avatarSize?: "lg" | "md" | "sm";
    /** Icon name to display */
    icon?: string;
    /** Value to display */
    value?: string;
    /**Option to add link into cell */
    link?: string;
    /** Count max length to display of value */
    countCharacters?: number;
}
declare function OneLineText(props: OneLineTextProps): react_jsx_runtime.JSX.Element;
declare namespace OneLineText {
    var defaultProps: {
        avatar: any;
        icon: any;
        tableSize: string;
        avatarType: string;
    };
}

interface TwoLineTextProps {
    /**Used to change style Component */
    className?: string;
    /**URL of avatar to display */
    avatar?: string;
    /**Shape option of avatar*/
    avatarType?: "circle" | "square";
    /** Icon name to display */
    icon?: string;
    /** Display value of line 1*/
    valueLine1?: string;
    /** Display value of line 2*/
    valueLine2?: string;
    /** ClassName to style for display line 1 */
    classNameFirstLine?: string;
    /** ClassName to style for display line 2 */
    classNameSecondLine?: string;
    /**Option to add link into cell */
    link?: string;
    /** Count max length to display of line 1 */
    countCharacters1?: number;
    /** Count max length to display of line 2 */
    countCharacters2?: number;
}
declare function TwoLineText(props: TwoLineTextProps): react_jsx_runtime.JSX.Element;
declare namespace TwoLineText {
    var defaultProps: {
        avatar: any;
        icon: any;
        tableSize: string;
        avatarType: string;
    };
}

interface StatusLineProps {
    /**Used to change style Component */
    className?: string;
    /** Boolean to display status of data */
    active?: boolean;
    /** Display value of status */
    value?: string;
    /** Count max length to display of value */
    countCharacters?: number;
    /** Color of status */
    color?: string;
}
declare function StatusLine(props: StatusLineProps): react_jsx_runtime.JSX.Element;
declare namespace StatusLine {
    var defaultProps: {
        active: boolean;
    };
}

interface ListOverflowMenu {
    title: string;
    action: (params?: any) => void;
    isShow: boolean;
}

interface CustomProps {
    /**List object action {name,function} of menu */
    list?: ListOverflowMenu[];
    /**Change the size of button */
    size?: "md" | "xl";
    /**Append this component to body */
    appendToBody?: boolean;
    /**Option to set type vertical or horizontal */
    type?: "vertical" | "horizontal";
    /**Option to set not allow to click Component */
    disabled?: boolean;
}
declare function OverflowMenu(props: CustomProps): react_jsx_runtime.JSX.Element;
declare namespace OverflowMenu {
    var defaultProps: {
        size: string;
        type: string;
    };
}

interface RadioGroupComponentProps {
    /**Handle change item checked */
    onChecked?: (value: boolean) => void;
    /**Value of item checked */
    value?: any;
    /**Not allow to change value RadioGroup */
    disabled?: boolean;
}
declare function RadioGroup(props: RadioGroupComponentProps & RadioGroupProps): react_jsx_runtime.JSX.Element;

interface RadioComponentProps {
    /**Handle the change value */
    onChange?: (value: boolean) => void;
    /**Specifies whether the radio is selected */
    checked?: boolean;
    /**Not allow change value */
    disabled?: boolean;
}
declare function Radio(props: RadioComponentProps & RadioProps & RadioGroupProps): react_jsx_runtime.JSX.Element;
declare namespace Radio {
    var Group: typeof RadioGroup;
}

interface CheckboxProps {
    /**Handle change value checkbox */
    onChange?: (value: boolean) => void;
    /**Specifies whether the checkbox is selected */
    checked?: boolean;
    /**True to not allow change value */
    disabled?: boolean;
    /**Label of this checkbox item */
    label?: string;
    /**Type read only is true */
    readOnly?: boolean;
    /**Max length of label checkbox */
    maxLengthItem?: number;
}
declare function Checkbox(props: CheckboxProps): react_jsx_runtime.JSX.Element;

interface CheckboxGroupComponentProps<T extends Model> {
    /**Handle change the values of CheckboxGroup */
    onChange?: (values: number[], selectedOptions?: T[]) => void;
    /**List value of checked  */
    values?: number[];
    /**Not allow change value */
    disabled?: boolean;
    /**Label of CheckboxGroup */
    label?: string;
    /**Pass data options (list item and label for list checkbox inside) */
    dataOptions?: T[];
    /**Option to render item as label of checkbox inside */
    render?: (t: T) => string;
    /**Maximum length of label checkbox inside */
    maxLengthItem?: number;
    /**API to get list data for checkbox inside (as dataOptions) */
    getList?: () => Observable<T[]>;
}
declare function defaultRenderObject$1<T extends Model>(t: T): any;
declare function CheckboxGroup(props: CheckboxGroupComponentProps<Model>): react_jsx_runtime.JSX.Element;
declare namespace CheckboxGroup {
    var defaultProps: {
        disabled: boolean;
        render: typeof defaultRenderObject$1;
        maxLengthItem: number;
    };
}

interface TagProps {
    /**Used to change style Component */
    className?: string;
    /**Value of Tag*/
    value?: string;
    /**Set background color Tag */
    backgroundColor?: string;
    /**Set color Tag */
    color?: string;
    /**Max length of display value */
    countCharacters?: number;
    /** Provide a custom action (onClick) to the component */
    action?: () => void;
    /**Option change size of component */
    size?: "sm" | "md";
}
declare function Tag(props: TagProps): react_jsx_runtime.JSX.Element;
declare namespace Tag {
    var defaultProps: {
        backgroundColor: string;
        color: string;
        size: string;
    };
}

interface InpageNavigationProps {
    /**Use to custom style the component*/
    className?: string;
    /**List navigation */
    list?: Model[];
    /**Title of component */
    title?: string;
    /**Description of component */
    description?: string;
    /**Handle onChange when onClick to navigation_item */
    onChange?: (data?: any) => void;
    /**Option to custom render name of navigation_item */
    render?: (t: Model) => string;
    /**Pass default navigation_item-active */
    defaultActiveItem?: Model;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function InpageNavigation(props: InpageNavigationProps): react_jsx_runtime.JSX.Element;
declare namespace InpageNavigation {
    var defaultProps: {
        render: typeof defaultRenderObject;
    };
}

declare const PUBLIC_URL: string;
declare const ASSETS_IMAGE: string;
declare const ASSETS_SVG: string;
declare const BASE_API_URL: string;
declare const SIGNALR_CHANNEL = "Receive";
/**
 * Date-time constants
 */
declare const STANDARD_DATE_REGEX: RegExp;
declare const STANDARD_TIME_REGEX: RegExp;
declare const STANDARD_DATE_TIME_REGEX_WITHOUT_TIMEZONE: RegExp;
declare const STANDARD_DATE_TIME_REGEX: RegExp;
declare const STANDARD_DATE_FORMAT = "YYYY-MM-DD";
declare const STANDARD_DATE_FORMAT_INVERSE = "DD-MM-YYYY";
declare const STANDARD_DATE_FORMAT_INVERSE_DEFAULT = "DD/MM/YYYY";
declare const STANDARD_TIME_FORMAT = "HH:mm:ss";
declare const DEFAULT_DATETIME_VALUE = "0001-01-01T00:00:00";
declare const STANDARD_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ssZ";
declare const STANDARD_DATE_TIME_FORMAT_VIEW = "DD-MM-YYYY HH:mm:ss";
declare const TIMEZONE_OFFSET: string;
/**
 * Debounce time constants
 */
declare const DEBOUNCE_TIME_100 = 100;
declare const DEBOUNCE_TIME_150 = 150;
declare const DEBOUNCE_TIME_200 = 200;
declare const DEBOUNCE_TIME_250 = 250;
declare const DEBOUNCE_TIME_300 = 300;
declare const DEBOUNCE_TIME_350 = 350;
declare const DEBOUNCE_TIME_400 = 400;
declare const INPUT_DEBOUNCE_TIME = 400;
/**
 * limit constants
 */
declare const DEFAULT_LIMIT_WORD = 50;
declare const NOTIFICATION_LIMIT_WORD = 75;
/**
 * Filter constants
 */
declare const DEFAULT_TAKE = 10;
declare const SPECIAL_CHARACTERS: RegExp;
/**
 * url constants
 */
declare const MENU_URL_REGEX: RegExp;
declare const ACTION_URL_REGEX: RegExp;

declare enum BORDER_TYPE {
    MATERIAL = 0,
    BORDERED = 1,
    FLOAT_LABEL = 2,
    NOT_BORDERED = 3
}
declare enum ValidateStatus {
    success = "success",
    warning = "warning",
    error = "error",
    validating = "validating"
}
declare enum NUMBER_BUTTON {
    THREE = "three",
    TWO = "two"
}
declare enum ADVANCE_DATE_RANGE_TYPE {
    SHORT = 0,
    INPUT = 1
}
declare enum ActionFilterEnum {
    ChangeAllField = 0,
    ChangeOneField = 1,
    ChangeSkipTake = 2,
    ChangeOrderType = 3
}
declare enum UPLOADTYPE_IMAGE {
    IMAGE = 0,
    AVATAR = 1
}
declare enum MODAL_SIZE {
    SIZE_320 = 320,
    SIZE_520 = 520,
    SIZE_720 = 720,
    SIZE_1024 = 1024,
    SIZE_1200 = 1200
}
declare enum NUMBER_TYPE {
    DECIMAL = "DECIMAL",
    LONG = "LONG"
}

export { ACTION_URL_REGEX, ADVANCE_DATE_RANGE_TYPE, ASSETS_IMAGE, ASSETS_SVG, ActionBarComponent, ActionFilterEnum, AdvanceDateFilter, AdvanceDateRangeFilter, AdvanceDateRangeFilterMaster, AdvanceEnumFilter, AdvanceEnumFilterMaster, AdvanceIdFilter, AdvanceIdFilterMaster, AdvanceIdMultipleFilter, AdvanceInputRangeFilter, AdvanceMultipleIdFilterMaster, AdvanceNumberFilter, AdvanceStringFilter, AdvanceTreeFilter, AdvanceTreeFilterMaster, BASE_API_URL, BORDER_TYPE, BadgeText, Button, Checkbox, CheckboxGroup, Comment, DEBOUNCE_TIME_100, DEBOUNCE_TIME_150, DEBOUNCE_TIME_200, DEBOUNCE_TIME_250, DEBOUNCE_TIME_300, DEBOUNCE_TIME_350, DEBOUNCE_TIME_400, DEFAULT_DATETIME_VALUE, DEFAULT_LIMIT_WORD, DEFAULT_TAKE, DatePicker, DateRange, Drawer, EnumSelect, FormItem, INPUT_DEBOUNCE_TIME, IconLoading, InlineLoading, InpageNavigation, InputNumber, InputRange, InputSearch, InputSelect, InputTag, InputText, InputView, LayoutCell, LayoutHeader, MENU_URL_REGEX, MODAL_SIZE, Modal, MultipleSelect, NOTIFICATION_LIMIT_WORD, NUMBER_BUTTON, NUMBER_TYPE, NonModal, OneLineText, OverflowMenu, PUBLIC_URL, Pagination, ProgressIndicator, Radio, SIGNALR_CHANNEL, SPECIAL_CHARACTERS, STANDARD_DATE_FORMAT, STANDARD_DATE_FORMAT_INVERSE, STANDARD_DATE_FORMAT_INVERSE_DEFAULT, STANDARD_DATE_REGEX, STANDARD_DATE_TIME_FORMAT, STANDARD_DATE_TIME_FORMAT_VIEW, STANDARD_DATE_TIME_REGEX, STANDARD_DATE_TIME_REGEX_WITHOUT_TIMEZONE, STANDARD_TIME_FORMAT, STANDARD_TIME_REGEX, Select, StandardTable, StatusLine, TIMEZONE_OFFSET, Tabs, Tag, TagFilter, TearSheet, TextArea, TimePicker, Tree, TreeSelect, TwoLineText, UPLOADTYPE_IMAGE, UploadFile, UploadImage, ValidateStatus };
