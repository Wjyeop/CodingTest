#include <vector>
#include <cmath>

using namespace std;

int getDivisorCount(int num) {
    int count = 0;
    int sqrtNum = sqrt(num);  // 숫자의 제곱근까지만 약수 개수를 세면 됨

    for (int i = 1; i <= sqrtNum; i++) {
        if (num % i == 0) {
            if (i * i == num)  // 약수가 중복으로 세지 않도록 체크
                count++;
            else
                count += 2;
        }
    }

    return count;
}

int solution(int left, int right) {
    int answer = 0;

    for (int num = left; num <= right; num++) {
        int divisorCount = getDivisorCount(num);

        if (divisorCount % 2 == 0) {
            answer += num;
        } else {
            answer -= num;
        }
    }

    return answer;
}
