function solution(arr)
{
    var answer = [];
    
    let idx = 0;
    for(let i = 0; i < arr.length; i++) {
        if(answer.length === 0 || answer[idx-1] !== arr[i]) {
            answer.push(arr[i]);
            idx++;
        }
    }
    
    return answer;
}