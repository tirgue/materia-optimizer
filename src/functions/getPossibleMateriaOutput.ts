import { Materia } from "../interfaces";
import { getMateriaFromTypeAndRank } from "./getMateriaFromTypeAndRank";

export const getPossibleMateriaOutput = (
    materia: Materia,
    possibleMateriaTypes: string[],
    materiaDataset: Materia[],
    up?: boolean
): Materia[] => {
    return possibleMateriaTypes.map((materiaType) => {
        return getMateriaFromTypeAndRank(
            materiaType,
            up ? materia.rank + 1 : materia.rank,
            materiaDataset
        );
    });
};
