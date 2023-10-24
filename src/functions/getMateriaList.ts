import axios from "axios";
import { Materia } from "../interfaces/Materia";

const MATERIA_NAMES = [
    "Piety Materia",
    "Heavens' Eye Materia",
    "Savage Aim Materia",
    "Savage Might Materia",
    "Battledance Materia",
    "Gatherer's Guerdon Materia",
    "Gatherer's Guile Materia",
    "Gatherer's Grasp Materia",
    "Craftsman's Competence Materia",
    "Craftsman's Cunning Materia",
    "Craftsman's Command Materia",
    "Quickarm Materia",
    "Quicktongue Materia",
];

interface MateriaResponse {
    Results: {
        ID: number;
        Name: string;
    }[];
}

const NUMBER_DIC = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
};

export const getMateriaList = async () => {
    const promises = MATERIA_NAMES.map(async (materiaName) => {
        const { data } = await axios.get("https://xivapi.com/search", {
            params: {
                string: materiaName,
                columns: "ID,Name",
            },
        });

        const { Results: materiaList } = data as MateriaResponse;
        return materiaList.map(({ ID, Name }) => {
            const name = Name.split(" ");
            const rank = NUMBER_DIC[name.pop()];

            return {
                id: ID,
                name: name.join(" "),
                rank,
            };
        });
    });

    const materiaList = await Promise.all(promises);

    return materiaList.flat();
};
