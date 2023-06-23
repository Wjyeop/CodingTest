import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public String solution(String s) {
        // 문자열을 char 배열로 변환
        char[] chars = s.toCharArray();

        // 문자를 큰 것부터 작은 순으로 정렬
        Arrays.sort(chars);

        // 문자열을 뒤집어서 반환
        return new StringBuilder(new String(chars)).reverse().toString();
    }
}
