import { Materia } from "../interfaces";
import { getEV } from "./getEV";

export const getTransmutationProfit = (
    inputMaterias: Materia[],
    materiaDataset: Materia[]
): [number, number] => {
    const ev = getEV(inputMaterias, materiaDataset);
    const outcome = inputMaterias.reduce(
        (previous, materia) => previous + materia.averagePrice,
        0
    );

    const profit = ev - outcome;
    const roi = profit / outcome;

    return [profit, roi];
};
