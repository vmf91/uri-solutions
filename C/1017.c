#include <stdio.h>

int main() { 
    int a, b, d;
    double l;

    scanf("%d", &a);
    scanf("%d", &b);

    d = a * b;
    l = d/12.0;

    printf("%.3lf\n", l);

    return 0;
}