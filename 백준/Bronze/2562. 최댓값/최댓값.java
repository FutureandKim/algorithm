import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] num = new int[9];
        int max = Integer.MIN_VALUE;
        int idx = 0;

        for(int i = 0; i < 9; i++)
            num[i] = sc.nextInt();

        for(int i = 0; i < 9; i++){
            max = Math.max(max, num[i]);
            if(max == num[i])
                idx = i;
        }
        System.out.println(max);
        System.out.print(idx+1);
    }
}