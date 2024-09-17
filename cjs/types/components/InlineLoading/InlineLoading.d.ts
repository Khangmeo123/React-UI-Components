import { PropsWithChildren } from "react";
import "./InlineLoading.scss";
export type StatusLoading = "default" | "submitting" | "submitted" | "error";
export interface InlineLoadingProps {
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
    (props: PropsWithChildren<InlineLoadingProps>): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        status: string;
        titleLoading: string;
        titleSubmitted: string;
        titleError: string;
    };
};
export default InlineLoading;
