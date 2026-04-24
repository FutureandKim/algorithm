function solution(s){
    let arr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(i === 0 && s[i] === ")") {
            return false;
        }
        
        if(s[i] === '(') {
            arr.push(s[i]);
        } else if (s[i] === ")") {
            if(arr.includes("(")) {
                arr.pop();
            }
        }
    }

    return arr.length === 0 ? true : false;
}