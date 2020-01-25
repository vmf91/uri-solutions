#include <stdio.h>
 
int main() {
    char a[255];
    double b, c, x;
    
    scanf("%s", a);
    scanf("%lf", &b);
    scanf("%lf", &c);

    x = x = b + 0.15 * c;

    printf("TOTAL = R$ %.2lf\n", x);

    return 0;
}