export const pagination = (arr, currentPage, rowPerPage) => {
    const firstIndex = (currentPage - 1) * rowPerPage;
    const lastIndex = firstIndex + rowPerPage;

    const result = arr.slice(firstIndex, lastIndex);

    return result;
};
