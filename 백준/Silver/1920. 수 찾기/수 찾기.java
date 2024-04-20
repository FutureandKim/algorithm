import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];

        for(int i = 0; i < n; i++)
            a[i] = sc.nextInt();

        Arrays.sort(a);

        int m = sc.nextInt();
        int[] b = new int[m];
        for(int i = 0; i < m; i++){
            b[i] = sc.nextInt();
            System.out.println(isExist(a, b[i]));
        }
    }

    public static int isExist(int[] arr, int n){
        int left = 0;
        int right = arr.length - 1;

        while(left <= right){
            int mid = left + (right - left) / 2;
            if(arr[mid] == n)
                return 1;
            else if(arr[mid] < n)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return 0;
    }
}