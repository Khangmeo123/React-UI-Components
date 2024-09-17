import { PropsWithChildren } from "react";
import { ButtonProps } from "../Button";
import "./LinkButton.scss";
export interface LinkButtonProps extends ButtonProps {
}
declare const LinkButton: (props: PropsWithChildren<LinkButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default LinkButton;
