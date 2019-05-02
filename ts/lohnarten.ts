export const createLohnarten = (array) => [[]].concat(
    array.map(row =>
        [parseInt(row[0]), row[9] || 0, row[11] || 0, row[12] || 0, row[13] || 0, row[10] || 0, , , row[1] || 0, , row[2] || 0]
    )
)