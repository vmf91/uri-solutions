#include <stdio.h>

int main() { 
    int n, x_100, r_100, x_50, r_50, x_20, r_20, x_10, r_10, x_5, r_5, x_2, r_2, x_1;

    scanf("%d", &n);

    x_100 = n/(100);
    r_100 = n%(100);

    x_50 = r_100/(50);
    r_50 = r_100%(50);

    x_20 = r_50/(20);
    r_20 = r_50%(20);

    x_10 = r_20/(10);
    r_10 = r_20%(10);

    x_5 = r_10/(5);
    r_5 = r_10%(5);

    x_2 = r_5/(2);
    r_2 = r_5%(2);

    x_1 = r_2/(1);

    printf("%d\n", n);
    printf("%d nota(s) de R$ 100,00\n", x_100);
    printf("%d nota(s) de R$ 50,00\n", x_50);
    printf("%d nota(s) de R$ 20,00\n", x_20);
    printf("%d nota(s) de R$ 10,00\n", x_10);
    printf("%d nota(s) de R$ 5,00\n", x_5);
    printf("%d nota(s) de R$ 2,00\n", x_2);
    printf("%d nota(s) de R$ 1,00\n", x_1);

    return 0;
}