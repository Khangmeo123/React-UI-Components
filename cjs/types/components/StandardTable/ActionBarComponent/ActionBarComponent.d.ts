import { ReactNode, Dispatch, SetStateAction } from "react";
import { Key } from "antd/lib/table/interface";
import "./ActionBarComponent.scss";
export interface ActionBarComponentProps {
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
declare function ActionBarComponent(props: ActionBarComponentProps): import("react/jsx-runtime").JSX.Element;
declare namespace ActionBarComponent {
    var defaultProps: {
        selectedRowKeys: any[];
        translateSelected: string;
        translateLine: string;
        translateTitleCancelButton: string;
    };
}
export default ActionBarComponent;
