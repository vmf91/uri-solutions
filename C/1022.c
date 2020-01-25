#include <stdio.h>

int mdc(int a, int b){
    int c, neg;
    neg = 1;
    
    if(b < 0 || a < 0){
        neg = -1;
    }

    while (b != 0){
        c = b;
        b = a % b;
        a = c;
    }
        
    return a*neg;
}

int main() { 
    int n, i, x, n1, d1, n2, d2, n3, d3, n4, d4;
    char op, b1, b2;

    scanf("%d", &n);

    for(i = 0; i< n; i++){
        scanf("%d %c %d %c %d %c %d", &n1, &b1, &d1, &op, &n2, &b2, &d2);

        if(op == '+'){
            n3 = n1*d2 + n2*d1;
            d3 = d1*d2;
        }
        else if(op == '-'){
            n3 = n1*d2 - n2*d1;
            d3 = d1*d2;
        }
        else if(op == '*'){
            n3 = n1*n2;
            d3 = d1*d2;
        }
        else if(op == '/'){
            n3 = n1*d2;
            d3 = n2*d1;
        }

        x = mdc(n3, d3);

        n4 = n3/x;
        d4 = d3/x;

        printf("%d/%d = %d/%d\n", n3, d3, n4, d4);
    }

    return 0;
}
    