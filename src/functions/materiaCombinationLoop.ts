import * as fs from "fs";
import { Materia } from "../interfaces";
import { getTransmutationProfit } from "./getTransmutationProfit";

export const materiaCombinationLoop = (
    materiaDataset: Materia[],
    customFilter?: (m1: Materia, m2: Materia) => boolean,
    fileName?: string
) => {
    customFilter ??= (m1: Materia, m2: Materia) => m1.rank > m2.rank;
    fileName ??= "./dump";

    materiaDataset.forEach((m1, i) => {
        console.log(`${i}/${materiaDataset.length}`);

        if (m1.rank === 10) return;

        materiaDataset.forEach((m2) => {
            if (m2.rank === 10) return;
            if (m1.id > m2.id) return;
            if (customFilter(m1, m2)) return;

            materiaDataset.forEach((m3) => {
                if (m3.rank === 10) return;
                if (m2.id > m3.id) return;
                if (customFilter(m2, m3)) return;

                materiaDataset.forEach((m4) => {
                    if (m4.rank === 10) return;
                    if (m3.id > m4.id) return;
                    if (customFilter(m3, m4)) return;

                    materiaDataset.forEach((m5) => {
                        if (m5.rank === 10) return;
                        if (m4.id > m5.id) return;
                        if (customFilter(m4, m5)) return;

                        const inputMateria = [m1, m2, m3, m4, m5];

                        const [profit, roi] = getTransmutationProfit(
                            inputMateria,
                            materiaDataset
                        );

                        if (profit > 2000) {
                            fs.appendFileSync(
                                fileName,
                                `${inputMateria
                                    .map(({ id }) => id)
                                    .join("-")},${Math.round(profit)},${roi}\n`
                            );
                        }
                    });
                });
            });
        });
    });
};
