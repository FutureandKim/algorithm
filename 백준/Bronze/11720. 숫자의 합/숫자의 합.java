import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String str = sc.next();
        int sum = 0;

        for(int i = 0; i < n; i++){
            char c = str.charAt(i);
            sum += Character.getNumericValue(c);
        }
        System.out.print(sum);
    }
}