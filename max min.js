function findMinMax() {
    let Arr = [50, 60, 20, 10, 40];

    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
    
    console.log(minValue);
    console.log(maxValue);
}

findMinMax()