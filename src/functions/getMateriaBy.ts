import { Materia } from "../interfaces";

export const getMateriaBy = <T extends keyof Materia>(
    key: T,
    value: Materia[T],
    materiaList: Materia[]
): Materia[] => {
    return materiaList.filter((materia) => materia[key] === value);
};
