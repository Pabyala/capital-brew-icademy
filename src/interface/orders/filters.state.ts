import { DefaultData } from "../default.interface";

export interface FilterState {
    branchCategory: DefaultData | null
    startDate: string;
    endDate: string;
    statusType: DefaultData | null
    tabs: DefaultData[];
    activeTab: DefaultData;
    searchValue: string;
    productCategory: DefaultData | null
}