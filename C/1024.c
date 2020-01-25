#include <stdio.h>
#include <string.h>

int main() { 
    int n, k, i, j, len, len_half;
    char line[1001], line2[1001], c;

    scanf("%d", &n);

    for(k = 0; k < n; k++){
        scanf(" %[^\n]s", line);

        len = strlen(line);
        len_half = len/2;

        for(i = 0; i < len; i++){
            if ((line[i] >= 'a' && line[i] <= 'z') || (line[i] >= 'A' && line[i] <= 'Z')) {
                line[i] += 3;
            }
        }

        strcpy(line2, line);

        for (i = 0; i < len; i++){
            line[i] = line2[len - 1 - i];
        }

        for (i = len_half; i < len; i++){
            line[i] -= 1;
        }

        printf("%s\n", line);
    }

    return 0;
}