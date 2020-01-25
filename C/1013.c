#include <stdio.h>
#include <stdlib.h>

int highest(int a, int b){
    return (a + b + abs(a-b))/2;
}

int main() { 
    int a, b, c, x, y;
    
    scanf("%d %d %d", &a, &b, &c);

    x = highest(a, b);
    y = highest(x, c);

    printf("%d eh o maior\n", y);

    return 0;
}