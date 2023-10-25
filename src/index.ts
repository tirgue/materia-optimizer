import { computeMateriaDataset } from "./functions/computeMateriaDataset";
import { materiaCombinationLoop } from "./functions/materiaCombinationLoop";

const main = async () => {
    const materiaDataset = await computeMateriaDataset();
    console.log("🚀 ~ HELL :");
    materiaCombinationLoop(materiaDataset);
    console.log("🚀 ~ DONE :");
};

main();
