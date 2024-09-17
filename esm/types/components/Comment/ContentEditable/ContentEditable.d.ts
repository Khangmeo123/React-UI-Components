import { ModelFilter, Model } from "react-3layer-common";
import React, { RefObject } from "react";
import type { Observable } from "rxjs";
import "./ContentEditable.scss";
export interface contentAction {
    action: string;
    data: string;
}
export interface ContentEditableProps<TFilter extends ModelFilter> {
    suggestList?: (filter: TFilter) => Observable<Model[]>;
    sendValue?: () => void;
    loading?: boolean;
    placeholder?: string;
    inputFileRef?: RefObject<HTMLInputElement>;
    handleAttachFile?: (files: FileList) => void;
    showButton?: boolean;
}
declare const ContentEditable: React.ForwardRefExoticComponent<ContentEditableProps<ModelFilter> & React.RefAttributes<HTMLDivElement>>;
export default ContentEditable;
