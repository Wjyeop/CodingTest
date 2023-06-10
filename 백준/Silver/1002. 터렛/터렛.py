import math

def count_intersection(x1, y1, r1, x2, y2, r2):
    # 두 원의 중심 사이의 거리 계산
    distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    
    # 두 원이 일치하는 경우 (무한대 개의 교점)
    if distance == 0 and r1 == r2:
        return -1
    
    # 두 원이 외접하는 경우 (1개의 교점)
    if distance == r1 + r2:
        return 1
    
    # 두 원이 내접하는 경우 (1개의 교점)
    if distance == abs(r1 - r2):
        return 1
    
    # 두 원이 서로 다른 두 점에서 교차하는 경우 (2개의 교점)
    if distance < r1 + r2 and distance > abs(r1 - r2):
        return 2
    
    # 위의 경우가 아닌 경우 (0개의 교점)
    return 0

# 테스트 케이스 개수 입력
T = int(input())

for _ in range(T):
    # 테스트 케이스 입력
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    
    # 교점의 개수 출력
    print(count_intersection(x1, y1, r1, x2, y2, r2))