function solution(sizes) {
    let maxX = 1;
    let maxY = 1;
    for (let i = 0; i < sizes.length; i++) {
        let [x, y] = sizes[i];
        if (x > y) {
            [x, y] = [y, x]
        }
        
        if(maxX < x) maxX = x;
        if(maxY < y) maxY = y;
    }
    return maxX * maxY;
}