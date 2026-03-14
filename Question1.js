function printAlternatingPattern(totalRows) {
  for (let row = 1; row <= totalRows; row++) {
    const line = [];
    for (let col = 1; col <= row; col++) {
      
      line.push((row + col) % 2);
    }
    console.log(line.join(' '));
  }
}

printAlternatingPattern(6);