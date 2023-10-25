import { computeMateriaDataset } from "./functions/computeMateriaDataset";
import { getMateriaBy } from "./functions/getMateriaBy";
import { getTransmutationProfit } from "./functions/getTransmutationProfit";

const main = async () => {
    const materiaDataset = await computeMateriaDataset();
    const income = getTransmutationProfit(
        [
            getMateriaBy("id", 25186, materiaDataset)[0],
            getMateriaBy("id", 25186, materiaDataset)[0],
            getMateriaBy("id", 5666, materiaDataset)[0],
            getMateriaBy("id", 5666, materiaDataset)[0],
            getMateriaBy("id", 5670, materiaDataset)[0],
        ],
        materiaDataset
    );
    console.log("🚀 ~ file: index.ts:18 ~ main ~ ev:", income);
};

main();
