import { Materia } from "../interfaces";
import { getNameList } from "./getNameList";
import { getPossibleMateriaOutput } from "./getPossibleMateriaOutput";

export const getEV = (inputMaterias: Materia[], materiaDataset: Materia[]) => {
    if (inputMaterias.length !== 5) return;

    const inputMateriaTypes = getNameList(inputMaterias);

    const possibleMateriaTypes = getNameList(materiaDataset).filter((name) => {
        return !inputMateriaTypes.includes(name);
    });

    const allPossibleMaterias = inputMaterias
        .map((inputMateria) =>
            getPossibleMateriaOutput(
                inputMateria,
                possibleMateriaTypes,
                materiaDataset
            )
        )
        .flat();

    const allPossibleMateriasUp = inputMaterias
        .map((inputMateria) =>
            getPossibleMateriaOutput(
                inputMateria,
                possibleMateriaTypes,
                materiaDataset,
                true
            )
        )
        .flat();

    const probability = (0.95 * 0.2) / possibleMateriaTypes.length;
    const probabilityUp = (0.05 * 0.2) / possibleMateriaTypes.length;

    const ev = allPossibleMaterias.reduce<number>((previous, materia) => {
        return previous + materia.minPrice * probability;
    }, 0);

    const evUp = allPossibleMateriasUp.reduce<number>((previous, materia) => {
        return previous + materia.minPrice * probabilityUp;
    }, 0);

    return ev + evUp;
};
