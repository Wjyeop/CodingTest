#include <stdio.h>

int main() {
    int A, B;
    int unit, ten, hundred;

    scanf("%d %d", &A, &B);

    unit = A * (B % 10);
    printf("%d\n", unit);

    ten = A * ((B / 10) % 10);
    printf("%d\n", ten);

    hundred = A * (B / 100);
    printf("%d\n", hundred);

    int product = A * B;
    printf("%d\n", product);

    return 0;
}
