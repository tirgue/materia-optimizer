import { Materia } from "../interfaces";
import { materiaList } from "../materia-list.json";
import { getAveragePrice } from "./getAveragePrice";
import { getItemData } from "./getItemData";

export const computeMateriaDataset = async (): Promise<Materia[]> => {
    const promises = materiaList.map<Promise<Materia>>(async (materia) => {
        const materiaData = await getItemData(materia.id);
        const { minPrice, listings } = materiaData;

        const averagePrice = getAveragePrice(listings);

        return {
            ...materia,
            averagePrice,
            minPrice,
        };
    });

    return Promise.all(promises);
};
