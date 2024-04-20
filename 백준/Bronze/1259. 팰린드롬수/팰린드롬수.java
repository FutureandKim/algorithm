import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while(true){
            String str = sc.next();
            if(str.equals("0"))
                break;

            boolean isPalin = true;
            for(int i = 0; i < str.length()/2; i++) {
                if (str.charAt(i) != str.charAt(str.length() - i - 1)) {
                    isPalin = false;
                    break;
                }
            }
            System.out.println(isPalin ? "yes" : "no");
        }
    }
}