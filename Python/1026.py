import math
from sys import stdin

for line in stdin:
    a, b = line.split(' ')

    a = int(a)
    b = int(b)

    xor = a ^ b

    print(xor)