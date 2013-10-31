var bars = [2,0,0,10,5,5,5,10],

    prev = 0,
    collected = 0;

for(var i = 0; i < bars.length; i += 1) {
    var bar = bars[i],
        prev = bars[i-1],
        level = 0;

    if(i > 0 && bar > prev) {
        for(var j = i - 1; j >= 0; j = j - 1) {
            //console.log(j);
            if(bars[j] < bar) {
                level += 1;
                console.log([i,j,'level',level].join(' '))
            } else {
                collected += level;
                console.log([i,j,'ALL  ',level].join(' '))
                break;
            }
        }
    }
    
    prev = bar;
}

console.log(collected);