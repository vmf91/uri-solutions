#include <stdio.h>
 
int main() { 
    int a, b;
    double c, x;
    
    scanf("%d", &a);
    scanf("%d", &b);
    scanf("%lf", &c);

    x = b*c;

    printf("NUMBER = %d\n", a);
    printf("SALARY = U$ %.2lf\n", x);

    return 0;
}