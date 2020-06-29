export const sort = (data, sortBy) => {
    return data.sort((a, b) => {
        if (sortBy === 'asc') {
            return a.manufacturer < b.manufacturer ? -1 : 1;
        } else if (sortBy === 'desc') {
            return a.manufacturer > b.manufacturer ? -1 : 1;
        } else return 0;
    })
}

