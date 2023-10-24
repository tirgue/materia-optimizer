import { Materia } from "../interfaces";
import { getNameList } from "./getNameList";
import { getPossibleMateriaOutput } from "./getPossibleMateriaOutput";

export const getEV = (inputMaterias: Materia[], materiaDataset: Materia[]) => {
    if (inputMaterias.length !== 5) return;

    const inputMateriaTypes = getNameList(inputMaterias);

    const possibleMateriaTypes = getNameList(materiaDataset).filter((name) => {
        return !inputMateriaTypes.includes(name);
    });
    console.log("🚀 ~ possibleMateriaTypes:", possibleMateriaTypes);

    const allPossibleMaterias = inputMaterias
        .map((inputMateria) =>
            getPossibleMateriaOutput(
                inputMateria,
                possibleMateriaTypes,
                materiaDataset
            )
        )
        .flat();
    console.table(allPossibleMaterias);

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
    console.table(allPossibleMateriasUp);
};
