// 1500 => 1,500
export const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-PH").format(value);
};