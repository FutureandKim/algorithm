function solution(scoville, K) {
    const heap = new minHeap();
    
    for(const sc of scoville) {
        heap.push(sc);
    }
    
    let cnt = 0;
    while(heap.size() >= 2 && heap.peek() < K) {
        const first = heap.pop();
        const second = heap.pop();
        
        const mixed = first + second * 2;
        heap.push(mixed);
        cnt++;
    }
    return heap.peek() >= K ? cnt : -1;
}

class minHeap {
    constructor() {
        this.heap = [];
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;
        while(idx > 0) {
            const parentIdx = (idx - 1) >> 1;
            if(this.heap[parentIdx] <= this.heap[idx]) {
                break;
            }
            this.swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
    
    pop() {
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        
        this.heap[0] = this.heap.pop();
        
        let current = 0;
        
        while(true) {
            const left = current * 2 + 1;
            const right = current * 2 + 2;
            let smallest = current;
            
            if(left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            
            if(right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            
            if(smallest === current) break;
            
            this.swap(current, smallest);
            current = smallest;
        }
        
        return min;
    }
    
    
}