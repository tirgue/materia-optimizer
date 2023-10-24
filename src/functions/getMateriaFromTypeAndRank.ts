import { Materia } from "../interfaces";

export const getMateriaFromTypeAndRank = (
    type: string,
    rank: number,
    materiaDataset: Materia[]
) => {
    return materiaDataset.find(
        (materia) => materia.name === type && materia.rank === rank
    );
};
