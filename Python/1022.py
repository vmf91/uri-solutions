import math

def mdc(a, b):
    while b:
        a, b = b, a % b
    return a

n = int(input())

for i in range(n):
    line = input()
    n1, a, d1, op, n2, b, d2 = line.split(' ')

    n1 = int(n1)
    d1 = int(d1)
    n2 = int(n2)
    d2 = int(d2)

    if op == '+':
        n3 = n1*d2 + n2*d1
        d3 = d1*d2
    elif op == '-':
        n3 = n1*d2 - n2*d1
        d3 = d1*d2
    elif op == '*':
        n3 = n1*n2
        d3 = d1*d2
    elif op == '/':
        n3 = n1*d2
        d3 = n2*d1
    
    x = mdc(n3, d3)

    n4 = int(n3/x)
    d4 = int(d3/x)

    print('{}/{} = {}/{}'.format(n3, d3, n4, d4))
    