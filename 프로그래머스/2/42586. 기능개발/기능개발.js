function solution(progresses, speeds) {
    
    const publish = [];
    for(let i = 0; i < progresses.length; i++) {
        const day = Math.floor((100 - progresses[i]) / speeds[i]);
        const needMoreDay = (100 - progresses[i]) % speeds[i];

        const totalDay = needMoreDay > 0 ? day + 1: day
        publish.push(i > 0 && totalDay < publish[i-1] ? publish[i-1] : totalDay);
    }
    
    const publishMap = new Map();
    for(let i = 0; i < publish.length; i++) {
        publishMap.set(publish[i], publishMap.get(publish[i]) ? publishMap.get(publish[i]) + 1 : 1);
    }

    return [...publishMap.values()];
}