import { Model } from "react-3layer-common";
import { Observable } from "rxjs";
import "./CheckboxGroup.scss";
export interface CheckboxGroupComponentProps<T extends Model> {
    /**Handle change the values of CheckboxGroup */
    onChange?: (values: number[], selectedOptions?: T[]) => void;
    /**List value of checked  */
    values?: number[];
    /**Not allow change value */
    disabled?: boolean;
    /**Label of CheckboxGroup */
    label?: string;
    /**Pass data options (list item and label for list checkbox inside) */
    dataOptions?: T[];
    /**Option to render item as label of checkbox inside */
    render?: (t: T) => string;
    /**Maximum length of label checkbox inside */
    maxLengthItem?: number;
    /**API to get list data for checkbox inside (as dataOptions) */
    getList?: () => Observable<T[]>;
}
declare function defaultRenderObject<T extends Model>(t: T): any;
declare function CheckboxGroup(props: CheckboxGroupComponentProps<Model>): import("react/jsx-runtime").JSX.Element;
declare namespace CheckboxGroup {
    var defaultProps: {
        disabled: boolean;
        render: typeof defaultRenderObject;
        maxLengthItem: number;
    };
}
export default CheckboxGroup;
