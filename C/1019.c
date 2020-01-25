#include <stdio.h>

int main() { 
    int n, h, m, s, m_t;

    scanf("%d", &n);

    s = n%(60);
    m_t = (n - s)/60;
    m = m_t%60;
    h = (m_t - m)/60;

    printf("%d:%d:%d\n", h, m, s);

    return 0;
}