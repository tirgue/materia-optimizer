import * as fs from "fs";
import { Materia } from "../interfaces";
import { getTransmutationProfit } from "./getTransmutationProfit";

export const materiaCombinationLoop = (materiaDataset: Materia[]) => {
    materiaDataset.forEach((m1, i) => {
        if (m1.rank === 10) return;

        materiaDataset.forEach((m2) => {
            if (m2.rank === 10) return;
            if (m1.rank > m2.rank)
                return console.log("🚀 ~ ", m1.rank, ">", m2.rank);

            materiaDataset.forEach((m3) => {
                if (m3.rank === 10) return;
                if (m2.rank > m3.rank) return;

                materiaDataset.forEach((m4) => {
                    if (m4.rank === 10) return;
                    if (m3.rank > m4.rank) return;

                    materiaDataset.forEach((m5) => {
                        if (m5.rank === 10) return;
                        if (m4.rank > m5.rank) return;

                        const inputMateria = [m1, m2, m3, m4, m5];

                        const profit = getTransmutationProfit(
                            inputMateria,
                            materiaDataset
                        );

                        if (profit > 2000) {
                            fs.appendFileSync(
                                "./dump",
                                `${inputMateria.join("-")},${profit}\n`
                            );
                        }
                    });
                });
            });
        });
    });
};
