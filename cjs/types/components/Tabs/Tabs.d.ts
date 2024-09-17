import type { TabsProps as TabsPropsAnt, TabsType } from "antd/lib/tabs";
import "./Tabs.scss";
export interface TabsProps extends TabsPropsAnt {
    /**Option change tab styling */
    mode?: TabsType;
    /**List key of error tab */
    tabErrorKeys?: string[];
    /**Option for change background color tab to white  */
    lightColor?: boolean;
}
declare function Tabs(props: TabsProps): import("react/jsx-runtime").JSX.Element;
declare namespace Tabs {
    var defaultProps: {
        mode: string;
    };
}
export default Tabs;
