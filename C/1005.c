#include <stdio.h>
 
int main() { 
    double a, b, x;
    
    scanf("%lf", &a);
    scanf("%lf", &b);

    x = (a*3.5+b*7.5)/(3.5+7.5);

    printf("MEDIA = %.5lf\n", x);

    return 0;
}