class Solution {
    public String solution(String s) {
        String answer = "";
        char c;
        int idx = 0;
        
        for(int i = 0; i < s.length(); i++){
            if((s.charAt(i) >= 'a' && s.charAt(i) <= 'z') || (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')){
                if(idx % 2 == 0){
                    if(s.charAt(i) >= 'a' && s.charAt(i) <= 'z')
                        c = (char)(s.charAt(i) - 'a' + 'A');
                    else
                        c = s.charAt(i);
                    answer += c;
                } else if(idx % 2 == 1){
                    if(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')
                        c = (char)(s.charAt(i) - 'A' + 'a');
                    else
                        c = s.charAt(i);
                    answer += c;
                }
                idx++;
            }
            else{
                c = s.charAt(i);
                answer += c;
                idx = 0;
            }
        }
        
        return answer;
    }
}