export const getNameList = (list: { name: string }[]) => {
    return Array.from(new Set(list.map(({ name }) => name)));
};
