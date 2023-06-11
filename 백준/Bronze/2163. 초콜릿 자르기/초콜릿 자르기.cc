#include <stdio.h>

int main() {
    int N, M;
    scanf("%d %d", &N, &M);
    
    int minimumBreaks = (N * M) - 1;
    if (minimumBreaks < 0) {
        minimumBreaks = 0;
    }
    
    printf("%d\n", minimumBreaks);
    
    return 0;
}
