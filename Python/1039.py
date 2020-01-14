import math
from sys import stdin

for line in stdin:
    data = line.split(' ')
    data = [int(x) for x in data]

    r1, x1, y1, r2, x2, y2 = data

    d = math.sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))

    if d + r2 <= r1:
        print('RICO')
    else:
        print('MORTO')