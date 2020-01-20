import math

a, b, c = list(map(float,input().split()))

if a == 0 or math.pow(b, 2) < 4*a*c:
    print('Impossivel calcular')
else:

    r1 = (-b + math.sqrt(math.pow(b, 2) - 4*a*c))/(2*a)
    r2 = (-b - math.sqrt(math.pow(b, 2) - 4*a*c))/(2*a)

    print('R1 = {:.5f}'.format(r1))
    print('R2 = {:.5f}'.format(r2))