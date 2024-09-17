export interface IconLoadingAction {
    name?: string;
    action?: any;
}
export interface IconLoadingProps {
    /** Size of icon */
    size?: number;
    /** Color of icon */
    color?: string;
}
declare function IconLoading(props: IconLoadingProps): import("react/jsx-runtime").JSX.Element;
declare namespace IconLoading {
    var defaultProps: {
        size: number;
        color: string;
    };
}
export default IconLoading;
