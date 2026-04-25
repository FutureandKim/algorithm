function solution(begin, target, words) {
    function diffCount(a, b) {
        let diff = 0;
        for(let i = 0; i < a.length; i++) {
            if(a[i] !== b[i]) diff++
        }
        return diff;
    }
    
    if(!words.includes(target)) return 0;
    
    const visited = new Set();
    const queue = [[begin, 0]];
    visited.add(begin);
    
    while(queue.length) {
        const [cur, count] = queue.shift();
        console.log(cur, count);
        
        if(cur === target) return count;
        
        for(let i = 0; i < words.length; i++) {    
            if(!visited.has(words[i]) && diffCount(cur, words[i]) === 1) {
                visited.add(words[i]);
                queue.push([words[i], count + 1]);
            }
        }
    }
}

