import { PaginationProps as AntdPaginationProps } from "antd";
import "./Pagination.scss";
export interface PaginationProps extends AntdPaginationProps {
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
declare function Pagination(props: PaginationProps): import("react/jsx-runtime").JSX.Element;
declare namespace Pagination {
    var defaultProps: {
        pageSizeOptions: number[];
        skip: number;
        take: number;
        total: number;
        canChangePageSize: boolean;
    };
}
export default Pagination;
