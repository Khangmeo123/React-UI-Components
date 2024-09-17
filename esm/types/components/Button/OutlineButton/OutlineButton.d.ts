import React from "react";
import { ButtonProps } from "../Button";
import "./OutlineButton.scss";
export interface OutlineButtonProps extends ButtonProps {
}
declare const OutlineButton: React.ForwardRefExoticComponent<OutlineButtonProps & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<any>>;
export default OutlineButton;
