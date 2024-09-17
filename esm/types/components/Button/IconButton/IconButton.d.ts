import { ButtonProps } from "../Button";
import React, { PropsWithChildren } from "react";
import "./IconButton.scss";
export interface IconButtonProps extends ButtonProps {
}
declare const IconButton: (props: PropsWithChildren<IconButtonProps>, ref: React.Ref<any>) => import("react/jsx-runtime").JSX.Element;
export default IconButton;
