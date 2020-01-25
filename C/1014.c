#include <stdio.h>

int main() { 
    int x;
    double y;
    
    scanf("%d", &x);
    scanf("%lf", &y);

    printf("%.3lf km/l\n", x/y);

    return 0;
}