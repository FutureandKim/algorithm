import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int cnt = 1;
        int startIndex = 1;
        int endIndex = 1;
        int sum = 1;

        while(endIndex != N){
            if(sum < N){
                endIndex++;
                sum += endIndex;
            } else if(sum > N){
                sum -= startIndex;
                startIndex++;
            } else {
                cnt++;
                endIndex++;
                sum += endIndex;
            }
        }
        System.out.println(cnt);
    }
}
