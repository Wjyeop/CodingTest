#include <stdio.h>

int main() {
    int A, B, C;

    scanf("%d %d %d", &A, &B, &C);

    int result1 = (A + B) % C;
    int result2 = ((A % C) + (B % C)) % C;
    int result3 = (A * B) % C;
    int result4 = ((A % C) * (B % C)) % C;

    printf("%d\n", result1);
    printf("%d\n", result2);
    printf("%d\n", result3);
    printf("%d\n", result4);

    return 0;
}