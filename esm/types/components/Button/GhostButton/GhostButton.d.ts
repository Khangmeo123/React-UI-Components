import { PropsWithChildren } from "react";
import { ButtonProps } from "../Button";
import "./GhostButton.scss";
export interface GhostButtonProps extends ButtonProps {
}
declare const GhostButton: (props: PropsWithChildren<GhostButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default GhostButton;
