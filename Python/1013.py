import math

def highest(a, b):
    return (a + b + abs(a-b))/2

line = input()
a, b, c = line.split(' ')
a = int(a)
b = int(b)
c = int(c)

x = int(highest(a, b))
y = int(highest(x, c))

print('{} eh o maior'.format(y))