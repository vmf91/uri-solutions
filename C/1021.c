#include <stdio.h>

int main() { 
    double x;
    int n, x_100, r_100, x_50, r_50, x_20, r_20, x_10, r_10, x_5, r_5, x_2, r_2, x_1, r_1, x_050, r_050, x_025, r_025, x_010, r_010, x_005, r_005, x_001, r_001;
    
    scanf("%lf", &x);

    n = (int) (x * 100);

    x_100 = n/(100*100);
    r_100 = n%(100*100);

    x_50 = r_100/(50*100);
    r_50 = r_100%(50*100);

    x_20 = r_50/(20*100);
    r_20 = r_50%(20*100);

    x_10 = r_20/(10*100);
    r_10 = r_20%(10*100);

    x_5 = r_10/(5*100);
    r_5 = r_10%(5*100);

    x_2 = r_5/(2*100);
    r_2 = r_5%(2*100);

    x_1 = r_2/(1*100);
    r_1 = r_2%(1*100);

    x_050 = r_1/(50);
    r_050 = r_1%(50);

    x_025 = r_050/(25);
    r_025 = r_050%(25);

    x_010 = r_025/(10);
    r_010 = r_025%(10);

    x_005 = r_010/(5);
    r_005 = r_010%(5);

    x_001 = r_005;

    printf("NOTAS:\n");
    printf("%d nota(s) de R$ 100.00\n", x_100);
    printf("%d nota(s) de R$ 50.00\n", x_50);
    printf("%d nota(s) de R$ 20.00\n", x_20);
    printf("%d nota(s) de R$ 10.00\n", x_10);
    printf("%d nota(s) de R$ 5.00\n", x_5);
    printf("%d nota(s) de R$ 2.00\n", x_2);
    printf("MOEDAS:\n");
    printf("%d moeda(s) de R$ 1.00\n", x_1);
    printf("%d moeda(s) de R$ 0.50\n", x_050);
    printf("%d moeda(s) de R$ 0.25\n", x_025);
    printf("%d moeda(s) de R$ 0.10\n", x_010);
    printf("%d moeda(s) de R$ 0.05\n", x_005);
    printf("%d moeda(s) de R$ 0.01\n", x_001);

    return 0;
}