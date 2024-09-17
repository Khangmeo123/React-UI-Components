import "./InputSearchSelect.scss";
export interface InputSelectProps {
    expanded?: boolean;
    placeHolder?: string;
    onSearch?: (T: string) => void;
    onKeyDown?: (event: any) => void;
    value?: string | null;
}
declare function InputSearchSelect(props: InputSelectProps): import("react/jsx-runtime").JSX.Element;
export default InputSearchSelect;
