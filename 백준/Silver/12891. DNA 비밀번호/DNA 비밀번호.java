import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int S = sc.nextInt();
        int P = sc.nextInt();
        String dnaStr = sc.next();
        int[] minCount = new int[4];
        for (int i = 0; i < 4; i++) {
            minCount[i] = sc.nextInt();
        }

        int[] currentCount = new int[4];
        int validCount = 0;

        // 첫 번째 윈도우 설정
        for (int i = 0; i < P; i++) {
            currentCount[getIndex(dnaStr.charAt(i))]++;
        }
        if (isValid(currentCount, minCount)) {
            validCount++;
        }

        // 슬라이딩 윈도우
        for (int i = P; i < S; i++) {
            currentCount[getIndex(dnaStr.charAt(i - P))]--;
            currentCount[getIndex(dnaStr.charAt(i))]++;

            if (isValid(currentCount, minCount)) {
                validCount++;
            }
        }

        // 결과 출력
        System.out.println(validCount);
    }

    // 문자의 인덱스를 반환하는 함수
    private static int getIndex(char ch) {
        switch (ch) {
            case 'A': return 0;
            case 'C': return 1;
            case 'G': return 2;
            case 'T': return 3;
            default: return -1;
        }
    }

    // 현재 카운트가 조건을 만족하는지 확인하는 함수
    private static boolean isValid(int[] currentCount, int[] minCount) {
        return currentCount[0] >= minCount[0] && currentCount[1] >= minCount[1] &&
               currentCount[2] >= minCount[2] && currentCount[3] >= minCount[3];
    }
}
