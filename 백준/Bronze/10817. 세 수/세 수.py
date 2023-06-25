# 세 정수를 입력받음
A, B, C = map(int, input().split())

# A, B, C 중에서 두 번째로 큰 값을 찾음
second_largest = max(min(A, B), min(max(A, B), C))

# 결과 출력
print(second_largest)
