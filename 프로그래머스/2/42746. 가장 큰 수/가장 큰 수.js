function solution(numbers) {
    numbers.sort((a, b) => {
        const ab = a.toString() + b.toString();
        const ba = b.toString() + a.toString();
        return Number(ab) > Number(ba) ? -1 : 1
    })
    
    let answer = '';
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[0] === 0) {
            return "0";
        }
        answer += numbers[i];
    }
    
    return answer;
}