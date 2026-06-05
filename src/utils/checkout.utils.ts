import { AddOns } from "../components/data/capital-brew-data";

export const getTotalPriceByQty = (price: number, qty: number) => {
    return price * qty;
};

export const getAddOnsTotal = (addOns: AddOns[]) => {
    return addOns.reduce((total, addon) => total + addon.price, 0);
};