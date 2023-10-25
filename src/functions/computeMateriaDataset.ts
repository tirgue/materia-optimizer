import { Materia } from "../interfaces";
import { materiaList } from "../materia-list.json";
import { getAveragePrice } from "./getAveragePrice";
import { getItemData } from "./getItemData";

export const computeMateriaDataset = async (
    realm?: "Moogle" | "Ragnarok"
): Promise<Materia[]> => {
    const promises = materiaList.map<Promise<Materia>>(async (materia) => {
        realm ??= "Moogle";

        // Get Data with GIL tax to get listings for average price
        const materiaData = await getItemData(materia.id);
        const { listings } = materiaData;
        const averagePrice = getAveragePrice(listings);

        // Get Data without GIL tax and find the min for Moogle
        const minMateriaData = await getItemData(materia.id, 9999999, 1);
        const minPrice =
            minMateriaData.listings.find(({ worldName }) => worldName === realm)
                .pricePerUnit * 0.95;

        return {
            ...materia,
            averagePrice,
            minPrice,
        };
    });

    return Promise.all(promises);
};
