import axios from "axios";
import { CurrentlyShownView } from "../interfaces";

const URL = "https://universalis.app/api/v2/Europe";

export const getItemData = async (
    itemId: number,
    limit?: number
): Promise<CurrentlyShownView> => {
    const response = await axios.get(`${URL}/${itemId}`, {
        params: {
            listings: limit ?? 30,
            fields: ["listings", "itemId", "minPrice"].join(","),
        },
    });

    return response.data;
};
