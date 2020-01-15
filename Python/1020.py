import math

n = int(input())

y = math.floor(n / 365)
y_r = n % 365

m = math.floor(y_r / 30)
d = y_r % 30

print('{} ano(s)'.format(y))
print('{} mes(es)'.format(m))
print('{} dia(s)'.format(d))