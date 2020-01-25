#include <stdio.h> 
#include <string.h> 
  
int main() 
{ 
    int p1_code, p1_units, p2_code, p2_units;
    double p1_price, p2_price, total;

    scanf("%d %d %lf", &p1_code, &p1_units, &p1_price);
    scanf("%d %d %lf", &p2_code, &p2_units, &p2_price);


    total = p1_units * p1_price + p2_units * p2_price;

    printf("VALOR A PAGAR: R$ %.2lf\n", total);
  
    return 0; 
}