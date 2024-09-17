import { PropsWithChildren } from "react";
import { ButtonProps } from "../Button";
import "./BleedButton.scss";
export interface BleedButtonProps extends ButtonProps {
}
declare const BleedButton: (props: PropsWithChildren<BleedButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default BleedButton;
