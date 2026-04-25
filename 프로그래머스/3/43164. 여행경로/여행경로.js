function solution(tickets) {
    var answer = [];
    
    tickets.sort((a, b) => {
        if (a[0] === b[0]) return a[1].localeCompare(b[1]);
        return a[0].localeCompare(b[0]);
    });
    
    const visited = Array(tickets.length).fill(false);
    const countries = ["ICN"];
    
    function dfs(country) {
        if(countries.length === tickets.length + 1) {
            return true;
        }
        
        for(let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i];
            
            if(from === country && !visited[i]) {
                countries.push(to);
                visited[i] = true;
                
                if(dfs(to)) {
                    return true;
                }
                
                countries.pop();
                visited[i] = false;
            }
        }
        return false;
    }
    
    dfs('ICN');
    return countries;
}