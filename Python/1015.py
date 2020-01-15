import math

p1 = input()
p2 = input()

x1, y1 = p1.split(' ')
x2, y2 = p2.split(' ')

x1 = float(x1)
y1 = float(y1)
x2 = float(x2)
y2 = float(y2)

d = math.sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))

print('{:.4f}'.format(d))