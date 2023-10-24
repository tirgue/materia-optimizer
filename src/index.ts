import { computeMateriaDataset } from "./functions/computeMateriaDataset";
import { getEV } from "./functions/getEV";
import { getMateriaBy } from "./functions/getMateriaBy";
import { Materia } from "./interfaces";

const main = async () => {
    const materiaDataset = await computeMateriaDataset();
    getEV(
        [
            getMateriaBy("id", 25186, materiaDataset)[0],
            getMateriaBy("id", 25186, materiaDataset)[0],
            getMateriaBy("id", 5666, materiaDataset)[0],
            getMateriaBy("id", 5666, materiaDataset)[0],
            getMateriaBy("id", 5670, materiaDataset)[0],
        ],
        materiaDataset
    );
};

main();
