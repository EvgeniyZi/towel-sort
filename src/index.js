module.exports = function towelSort (matrix) {

  if (!matrix) {
    return []
  }

  let processedRows = matrix.map((row, i) => {
    if (i % 2 === 0) {
      return row;
    } else {
      return row.reverse();
    }
  });

  return processedRows.flat();
}

