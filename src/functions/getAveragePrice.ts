import { ListingView } from "../interfaces";

export const getAveragePrice = (listings: ListingView[]) => {
    let total = 0;
    const amount = listings.reduce((previous, { pricePerUnit, quantity }) => {
        total += quantity;
        return previous + pricePerUnit * quantity;
    }, 0);

    return amount / total;
};
