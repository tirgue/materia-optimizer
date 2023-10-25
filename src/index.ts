import { computeMateriaDataset } from "./functions/computeMateriaDataset";
import { materiaCombinationLoop } from "./functions/materiaCombinationLoop";

const main = async () => {
    const materiaDataset = await computeMateriaDataset();
    console.log("🚀 ~ WIP...");
    materiaCombinationLoop(
        materiaDataset,
        (m1, m2) => m1.rank !== m2.rank,
        "./test"
    );
    console.log("🚀 ~ DONE !");
};

main();
