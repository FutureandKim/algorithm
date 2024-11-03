import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int S = sc.nextInt();
        int P = sc.nextInt();
        String str = sc.next();
        int[] dnaCnt = new int[4];

        for(int i = 0; i < 4; i++)
            dnaCnt[i] = sc.nextInt();

        int[] containCnt = new int[4];
        int cnt = 0;

        // 배열 생성
        for(int i = 0; i < P; i++){
            int idx = getIndex(str.charAt(i));
            containCnt[idx]++;
        }
        if(isValid(dnaCnt, containCnt)) cnt++;

        // 슬라이딩 윈도우
        for(int i = P; i < S; i++){
            int removeIdx = getIndex(str.charAt(i - P));
            int addIdx = getIndex(str.charAt(i));
            containCnt[removeIdx]--;
            containCnt[addIdx]++;

            if(isValid(dnaCnt, containCnt)) cnt++;
        }
        System.out.println(cnt);
    }

    public static int getIndex(char c){
        switch (c){
            case 'A': return 0;
            case 'C': return 1;
            case 'G': return 2;
            case 'T': return 3;
        }
        return -1;
    }

    public static boolean isValid (int[] dnaCnt, int[] containCnt){
        return containCnt[0] >= dnaCnt[0] && containCnt[1] >= dnaCnt[1] &&
                containCnt[2] >= dnaCnt[2] && containCnt[3] >= dnaCnt[3];
    }

}
