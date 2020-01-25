#include <stdio.h>
#include <stdlib.h>

int cmpfunc(const void * a, const void * b) {
   return ( *(int*)a - *(int*)b );
}

int main() { 
    int n, q, seq = 1, i, j, k, c, *p, index;

    while(1){
        scanf("%d %d", &n, &q);

        if (n == 0 && q == 0) {
            break;
        }

        int lista[n+1];

        printf("CASE# %d:\n", seq);

        seq += 1;
        for (i = 0; i < n + q; i++) {            
            if (i < n) {
                scanf("%d", &c);
                lista[i] = c;
            }

            if (i == (n - 1)) {
                qsort(lista, n, sizeof(int), cmpfunc);
            }

            if (i >= n) {
                scanf("%d", &c);
                p = (int *) bsearch(&c, lista, n, sizeof(int), cmpfunc);
			    index = (int) (p - lista);

                if(p == NULL){
                    printf("%d not found\n", c);
                }else{
                    while(lista[index] == c){
                        index--;
                    }
                    index += 2;
                    printf("%d found at %d\n", c, index);
                }
            }
        }
    }

    return 0;
}