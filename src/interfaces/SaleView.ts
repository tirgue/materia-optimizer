export interface SaleView {
    // Whether or not the item was high-quality.
    hq: boolean;
    // The price per unit sold.
    pricePerUnit: number; // int32
    // The stack size sold.
    quantity: number; // int32
    // The sale time, in seconds since the UNIX epoch.
    timestamp: number; // int64
    // Whether or not this was purchased from a mannequin. This may be null.
    onMannequin?: boolean;
    // The world name, if applicable.
    worldName?: string;
    // The world ID, if applicable.
    worldID?: number; // int32
    // The buyer name.
    buyerName?: string;
    // The total price.
    total: number; // int32
}
