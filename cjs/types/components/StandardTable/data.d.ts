interface DATA {
    id: number;
    key: string | number;
    code?: string;
    name?: string;
    description?: string;
    lightIcon?: string;
    lightLogo?: string;
    darkIcon?: string;
    darkLogo?: string;
    colorCode?: string;
    isDisplay?: boolean;
    themeId?: string;
    siteTypeId?: number;
    siteType?: any;
}
export declare const dataSource: DATA[];
export {};
