n = tonumber(io.read())

x_100 = math.floor(n / (100))
r_100 = n % (100)

x_50 = math.floor(r_100 / (50))
r_50 = r_100 % (50)

x_20 = math.floor(r_50 / (20))
r_20 = r_50 % (20)

x_10 = math.floor(r_20 / (10))
r_10 = r_20 % (10)

x_5 = math.floor(r_10 / (5))
r_5 = r_10 % (5)

x_2 = math.floor(r_5 / (2))
r_2 = r_5 % (2)

x_1 = math.floor(r_2 / (1))

print(n)
print(x_100 .. ' nota(s) de R$ 100,00')
print(x_50 .. ' nota(s) de R$ 50,00')
print(x_20 .. ' nota(s) de R$ 20,00')
print(x_10 .. ' nota(s) de R$ 10,00')
print(x_5 .. ' nota(s) de R$ 5,00')
print(x_2 .. ' nota(s) de R$ 2,00')
print(x_1 .. ' nota(s) de R$ 1,00')