import { Materia } from "../interfaces";
import { materiaList } from "../materia-list.json";
import { getAveragePrice } from "./getAveragePrice";
import { getItemData } from "./getItemData";

export const computeMateriaDataset = async (): Promise<Materia[]> => {
    const promises = materiaList.map<Promise<Materia>>(async (materia) => {
        // Get Data with GIL tax to get listings for average price
        const materiaData = await getItemData(materia.id);
        const { listings } = materiaData;
        const averagePrice = getAveragePrice(listings);

        // Get Data without GIL tax and find the min for Moogle
        const minMateriaData = await getItemData(materia.id, 9999999, 1);
        const minPrice = minMateriaData.listings.find(
            ({ worldID }) => worldID === 71
        ).pricePerUnit;

        return {
            ...materia,
            averagePrice,
            minPrice,
        };
    });

    return Promise.all(promises);
};
