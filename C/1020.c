#include <stdio.h>

int main() { 
    int n, y, y_r, m, d;

    scanf("%d", &n);

    y = n / 365;
    y_r = n % 365;

    m = y_r / 30;
    d = y_r % 30;

    printf("%d ano(s)\n", y);
    printf("%d mes(es)\n", m);
    printf("%d dia(s)\n", d);

    return 0;
}