r = tonumber(io.read())
n = 3.14159
a = n * r * r
a = string.format("%0.4f", a)
print('A=' .. a)