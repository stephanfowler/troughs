var bars = [2,0,0,10,0,0,2],

    left = 0,
    width = 0,
    silt = 0,
    lowest = 0,
    collected = 0;

for(var i =0; i<bars.length; i+=1) {
    var bar = bars[i];
    if (bar < left) {
        lowest = Math.min(lowest, bar);
        silt += bar;
        width += 1;
    } else {
        collected += left*width - silt;
        left = bar;
        lowest = bar;
        silt = 0;
        width = 0;
    }
}

console.log(collected);