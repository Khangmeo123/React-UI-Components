import "./Checkbox.scss";
export interface CheckboxProps {
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
declare function Checkbox(props: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export default Checkbox;
