#include <stdio.h>

int main() {
    int H, M;

    // 알람 시간 입력 받기
    scanf("%d %d", &H, &M);

    // 알람 시간 조정
    M -= 45;
    if (M < 0) {
        M += 60;
        H--;
        if (H < 0) {
            H = 23;
        }
    }

    // 조정된 알람 시간 출력
    printf("%d %d\n", H, M);

    return 0;
}