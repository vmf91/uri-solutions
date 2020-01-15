import math

line = input()
a, b, c = line.split(' ')
a = float(a)
b = float(b)
c = float(c)

area_a = a*c/2
area_b = 3.14159 * math.pow(c, 2)
area_c = (a + b) * c/2 
area_d = math.pow(b, 2)
area_e = a*b

print('TRIANGULO: {:.3f}'.format(area_a))
print('CIRCULO: {:.3f}'.format(area_b))
print('TRAPEZIO: {:.3f}'.format(area_c))
print('QUADRADO: {:.3f}'.format(area_d))
print('RETANGULO: {:.3f}'.format(area_e))