import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] students = new int[31];

        for(int i = 0; i < 28; i++){
            int n = sc.nextInt();
            students[n] = n;
        }

        for(int i = 1; i < 31; i++) {
            if(students[i] == 0)
                System.out.println(i);
        }
    }
}