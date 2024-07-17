export const pagination = <T>(
    arr: T[],
    currentPage: number,
    rowPerPage: number
): T[] => {
    const firstIndex = (currentPage - 1) * rowPerPage;
    const lastIndex = firstIndex + rowPerPage;

    const result = arr.slice(firstIndex, lastIndex);

    return result;
};
