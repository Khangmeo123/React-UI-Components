import React, { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import "./ButtonComponent.scss";
export type ButtonType = "primary" | "secondary" | "danger" | "outline-primary" | "outline-danger" | "ghost" | "ghost-primary" | "ghost-secondary" | "bleed-primary" | "bleed-secondary" | "link-plain" | "link" | "icon-only-primary" | "icon-only-outline-primary" | "icon-only-danger" | "icon-only-outline-danger" | "icon-only-ghost";
export interface ButtonProps {
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
    (props: PropsWithChildren<ButtonProps>, ref: React.Ref<any>): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        type: string;
        htmlType: string;
        disabled: boolean;
    };
};
export default Button;
