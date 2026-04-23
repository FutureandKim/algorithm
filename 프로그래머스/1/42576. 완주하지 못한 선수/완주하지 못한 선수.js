function solution(participant, completion) {
    let answer = '';
    
    // 참여자 map 생성
    const partMap = new Map();
    for(let i = 0; i < participant.length; i++) {
        const partMember = participant[i]
        if(partMap.has(partMember)) {
            const count = partMap.get(partMember) + 1
            partMap.set(partMember, count)
        } else {
            partMap.set(partMember, 1)
        }
    }
    
    // 완주자 판단
    for(let i = 0; i < completion.length; i++) {
        const completeMember = completion[i];
        if(partMap.has(completeMember)) {
            const count = partMap.get(completeMember) - 1
            partMap.set(completeMember, count)
        }
    }
    
    // 미완주자 판단
    for(let i = 0; i < participant.length; i++) {
        const target = participant[i];
        if(partMap.get(target) === 1){
            return answer = target;
        }
    }
    return answer;
}