function solution(maps) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const path = [];
    path.push([0,0]);
    
    const visited = new Array(n);
    for(let i = 0; i < n; i++) {
        visited[i] = new Array(m).fill(0);
    }
    visited[0][0] = 1;
    
    while(path.length) {
        const [x, y] = path.shift();
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx >= n || ny >= m || nx < 0 || ny < 0) continue;
            
            if(maps[nx][ny] === 0 || visited[nx][ny] > 0) continue;
            
            visited[nx][ny] = visited[x][y] + 1;
            
            if(nx === n-1 && ny === m-1) return visited[nx][ny];
            
            path.push([nx, ny]);
        }
    }
    return -1;
}