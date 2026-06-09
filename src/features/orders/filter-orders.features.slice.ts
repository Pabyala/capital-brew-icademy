import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { FilterState } from "../../interface/orders/filters.state";
import { DefaultData } from "../../interface/default.interface";

const initialTabs: DefaultData[] = [
    { id: 1, name: "All" },
    { id: 2, name: "Pending" },
    { id: 3, name: "Preparing" },
    { id: 4, name: "Ready" },
    { id: 5, name: "Completed" },
];

const initialState: FilterState = {
    branchCategory: null,
    startDate: '',
    endDate: '',
    statusType: null,

    tabs: initialTabs,
    activeTab: initialTabs[0],

    searchValue: '',
    productCategory: null,
};

const filterOrderSlice = createSlice({
    name: 'filterOrder',
    initialState,
    reducers: {
        setBranchCategory: (state, action: PayloadAction<DefaultData | null>) => {
            state.branchCategory = action.payload;
        },
        setFilterDate: (state, action: PayloadAction<{ value: string, type: 'start' | 'end' }>) => {
            const { type, value } = action.payload;
            if(type === 'start') {
                state.startDate = value;
            } else {
                state.endDate = value;
            }
        },

        setStatusType: (state, action: PayloadAction<DefaultData | null>) => {
            state.statusType = action.payload;
        },
        setActiveTab: (state, action: PayloadAction<DefaultData>) => {
            state.activeTab = action.payload;
        },
        reorderTabs: (state, action: PayloadAction<DefaultData>) => {
            const tab = action.payload;

            state.tabs = [
                tab,
                ...state.tabs.filter((t) => t.id !== tab.id),
            ];
        },
        resetTabs: (state) => {
            state.tabs = initialTabs;
            state.activeTab = initialTabs[0];
        },

        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setClearSearchValue: (state) => {
            state.searchValue = '';
        },

        setSelectProductCategory: (state, action: PayloadAction<DefaultData | null>) => {
            state.productCategory = action.payload;
        },
        setClearProductCategory: (state) => {
            state.productCategory = null;
        },

        resetFilters: (state) => {
            state.branchCategory = null;
            state.startDate = "";
            state.endDate = "";
            state.statusType = null;
            state.searchValue = "";
        },
    },
});

export const {
    setBranchCategory,
    setFilterDate,
    // --------
    setStatusType,
    setActiveTab,
    reorderTabs,
    resetTabs,
    // --------
    setSearchValue,
    setClearSearchValue,
    // --------
    setSelectProductCategory,
    setClearProductCategory,
    /// -------
    resetFilters,
} = filterOrderSlice.actions;

export default filterOrderSlice.reducer;

export const selectFilterBranch = (state: RootState) => state.filterOrderState.branchCategory;
export const selectFilterStartDate = (state: RootState) => state.filterOrderState.startDate;
export const selectFilterEndDate = (state: RootState) => state.filterOrderState.endDate;

export const selectStatusType = (state: RootState) => state.filterOrderState.statusType;
export const selectTabs = (state: RootState) => state.filterOrderState.tabs;
export const selectActiveTab = (state: RootState) => state.filterOrderState.activeTab;

export const selectSearchValue = (state: RootState) => state.filterOrderState.searchValue;

export const selectProductCategory = (state: RootState) => state.filterOrderState.productCategory;
export const selectProductCategoryId = (state: RootState) => state.filterOrderState.productCategory?.id;
export const selectProductCategoryName = (state: RootState) => state.filterOrderState.productCategory?.name;