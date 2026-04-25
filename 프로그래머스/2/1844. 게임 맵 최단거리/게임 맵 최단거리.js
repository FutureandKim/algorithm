function solution(maps) {
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const queue = [];
    queue.push([0, 0]);
    
    const dist = new Array(n);
    for(let j = 0; j < n; j++) {
        dist[j] = new Array(m).fill(0);
    }
    dist[0][0] = 1;

    while(queue.length) {
        const [x, y] = queue.shift();
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            
            if(maps[nx][ny] === 0 || dist[nx][ny] !== 0) continue;
            
            dist[nx][ny] = dist[x][y] + 1;
            
            if(nx === n - 1 && ny === m -1) return dist[nx][ny];
            
            queue.push([nx, ny]);
        }
    }
    
    return -1;
}