class Solution {
    public int solution(String t, String p) {
        int answer = 0;
        int tLen = t.length(), pLen = p.length();
        
        for(int i = 0; i <= tLen - pLen; i++){
            String part = t.substring(i, i+pLen);
            if(part.compareTo(p) <= 0){
                answer++;
            }
        }
        return answer;
    }
}
