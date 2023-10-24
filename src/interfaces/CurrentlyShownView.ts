import { ListingView, SaleView } from ".";

export interface CurrentlyShownView {
    // The item ID.
    itemID: number; // int32
    // The world ID, if applicable.
    worldID?: number; // int32
    // The last upload time for this endpoint, in milliseconds since the UNIX epoch.
    lastUploadTime: number; // int64
    // The currently-shown listings.
    listings?: ListingView[];
    // The currently-shown sales.
    recentHistory?: SaleView[];
    // The DC name, if applicable.
    dcName?: string;
    // The region name, if applicable.
    regionName?: string;
    // The average listing price, with outliers removed beyond 3 standard deviations of the mean.
    currentAveragePrice: number;
    // The average NQ listing price, with outliers removed beyond 3 standard deviations of the mean.
    currentAveragePriceNQ: number;
    // The average HQ listing price, with outliers removed beyond 3 standard deviations of the mean.
    currentAveragePriceHQ: number;
    // The average number of sales per day, over the past seven days (or the entirety of the shown sales, whichever comes first).
    // This number will tend to be the same for every item, because the number of shown sales is the same and over the same period.
    // This statistic is more useful in historical queries.
    regularSaleVelocity: number;
    // The average number of NQ sales per day, over the past seven days (or the entirety of the shown sales, whichever comes first).
    // This number will tend to be the same for every item, because the number of shown sales is the same and over the same period.
    // This statistic is more useful in historical queries.
    nqSaleVelocity: number;
    // The average number of HQ sales per day, over the past seven days (or the entirety of the shown sales, whichever comes first).
    // This number will tend to be the same for every item, because the number of shown sales is the same and over the same period.
    // This statistic is more useful in historical queries.
    hqSaleVelocity: number;
    // The average sale price, with outliers removed beyond 3 standard deviations of the mean.
    averagePrice: number;
    // The average NQ sale price, with outliers removed beyond 3 standard deviations of the mean.
    averagePriceNQ: number;
    // The average HQ sale price, with outliers removed beyond 3 standard deviations of the mean.
    averagePriceHQ: number;
    // The minimum listing price.
    minPrice: number; // int32
    // The minimum NQ listing price.
    minPriceNQ: number; // int32
    // The minimum HQ listing price.
    minPriceHQ: number; // int32
    // The maximum listing price.
    maxPrice: number; // int32
    // The maximum NQ listing price.
    maxPriceNQ: number; // int32
    // The maximum HQ listing price.
    maxPriceHQ: number; // int32
    // A map of quantities to listing counts, representing the number of listings of each quantity.
    stackSizeHistogram?: Object;
    // A map of quantities to NQ listing counts, representing the number of listings of each quantity.
    stackSizeHistogramNQ?: Object;
    // A map of quantities to HQ listing counts, representing the number of listings of each quantity.
    stackSizeHistogramHQ?: Object;
    // The world name, if applicable.
    worldName?: string;
    // The last upload times in milliseconds since epoch for each world in the response, if this is a DC request.
    worldUploadTimes?: Object;
    // The number of listings retrieved for the request. When using the "listings" limit parameter, this may be
    // different from the number of sale entries returned in an API response.
    listingsCount: number; // int32
    // The number of sale entries retrieved for the request. When using the "entries" limit parameter, this may be
    // different from the number of sale entries returned in an API response.
    recentHistoryCount: number; // int32
    // The number of items (not listings) up for sale.
    unitsForSale: number; // int32
    // The number of items (not sale entries) sold over the retrieved sales.
    unitsSold: number; // int32
}
