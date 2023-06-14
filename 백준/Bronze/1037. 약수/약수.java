import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = scanner.nextInt();
        int[] divisors = new int[count];

        for (int i = 0; i < count; i++) {
            divisors[i] = scanner.nextInt();
        }

        int maxDivisor = Integer.MIN_VALUE;
        int minDivisor = Integer.MAX_VALUE;

        // 주어진 진짜 약수 중 최대값과 최소값을 구함
        for (int divisor : divisors) {
            if (divisor > maxDivisor) {
                maxDivisor = divisor;
            }
            if (divisor < minDivisor) {
                minDivisor = divisor;
            }
        }

        // 최대값과 최소값을 곱하여 N을 구함
        int N = maxDivisor * minDivisor;
        System.out.println(N);
    }
}
