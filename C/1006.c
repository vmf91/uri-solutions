#include <stdio.h>
 
int main() { 
    double a, b, c, x;
    
    scanf("%lf", &a);
    scanf("%lf", &b);
    scanf("%lf", &c);

    x = (a*2+b*3+c*5)/(2+3+5);

    printf("MEDIA = %.1lf\n", x);

    return 0;
}