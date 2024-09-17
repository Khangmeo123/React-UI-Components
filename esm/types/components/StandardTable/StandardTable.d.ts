import type { TableProps } from "antd/lib/table";
import "./StandardTable.scss";
export interface StandardTableCustomProps extends TableProps<any> {
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
declare function StandardTable(props: StandardTableCustomProps): import("react/jsx-runtime").JSX.Element;
declare namespace StandardTable {
    var defaultProps: {
        spinning: boolean;
        isExpandable: boolean;
        tableSize: string;
        isLevel2: boolean;
        pagination: boolean;
    };
}
export default StandardTable;
