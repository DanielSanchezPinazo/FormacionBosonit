
function rangeOfNumbers(startNum, endNum) {

    if (startNum == endNum) {

        return [startNum];

    } else if (startNum < endNum) {
        
        const range = rangeOfNumbers( startNum + 1, endNum);
        range.unshift(startNum);
        console.log(range);
        return range;
    }
  };

  rangeOfNumbers(1, 5);


