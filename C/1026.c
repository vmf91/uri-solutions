#include <stdio.h>

int main() { 
    unsigned long int a, b, xor;

    while(scanf("%lu %lu", &a, &b) == 2){
        xor = (a ^ b);
        printf("%lu\n", xor);
    }

    return 0;
}