import { ReactNode } from "react";
import { ValidateStatus } from "@Configs/enum";
import "./FormItem.scss";
export interface ValidateObject {
    validateStatus: ValidateStatus;
    message: string;
}
export interface FormItemProps {
    /**Show the status validation*/
    validateStatus?: ValidateStatus;
    /**The validated message*/
    message?: string;
    children: ReactNode;
    /**Place content to the right*/
    placeRight?: boolean;
    /**Pass object validated to display state of  children field*/
    validateObject?: ValidateObject;
}
declare function FormItem(props: FormItemProps): import("react/jsx-runtime").JSX.Element;
declare namespace FormItem {
    var defaultProps: {
        placeRight: boolean;
    };
}
export default FormItem;
