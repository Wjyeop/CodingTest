#include <stdio.h>
#include <string.h>

int main() {
    char str[100];

    scanf("%s", str);

    strcat(str, "??!");

    printf("%s\n", str);

    return 0;
}