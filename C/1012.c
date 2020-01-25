#include <stdio.h>
 
int main() { 
    double a, b, c, area_a, area_b, area_c, area_d, area_e;
    
    scanf("%lf %lf %lf", &a, &b, &c);

    area_a = a*c/2;
    area_b = 3.14159 * c * c;
    area_c = (a + b) * c/2;
    area_d = b * b;
    area_e = a*b;

    printf("TRIANGULO: %.3lf\n", area_a);
    printf("CIRCULO: %.3lf\n", area_b);
    printf("TRAPEZIO: %.3lf\n", area_c);
    printf("QUADRADO: %.3lf\n", area_d);
    printf("RETANGULO: %.3lf\n", area_e);

    return 0;
}