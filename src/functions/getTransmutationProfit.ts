import { Materia } from "../interfaces";
import { getEV } from "./getEV";

export const getTransmutationProfit = (
    inputMaterias: Materia[],
    materiaDataset: Materia[]
): number => {
    const ev = getEV(inputMaterias, materiaDataset);
    const outcome = inputMaterias.reduce(
        (previous, materia) => previous + materia.averagePrice,
        0
    );

    return ev - outcome;
};
