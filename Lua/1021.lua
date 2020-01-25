n = tonumber(io.read())

n = math.floor(n * 100)

x_100 = math.floor(n / (100*100))
r_100 = n % (100*100)

x_50 = math.floor(r_100 / (50*100))
r_50 = r_100 % (50*100)

x_20 = math.floor(r_50 / (20*100))
r_20 = r_50 % (20*100)

x_10 = math.floor(r_20 / (10*100))
r_10 = r_20 % (10*100)

x_5 = math.floor(r_10 / (5*100))
r_5 = r_10 % (5*100)

x_2 = math.floor(r_5 / (2*100))
r_2 = r_5 % (2*100)

x_1 = math.floor(r_2 / (1*100))
r_1 = r_2 % (1*100)

x_050 = math.floor(r_1 / (0.5*100))
r_050 = r_1 % (0.5*100)

x_025 = math.floor(r_050 / (0.25*100))
r_025 = r_050 % (0.25*100)

x_010 = math.floor(r_025 / (0.1*100))
r_010 = r_025 % (0.1*100)

x_005 = math.floor(r_010 / (0.05*100))
r_005 = r_010 % (0.05*100)

x_001 = math.floor((n % (0.05*100)) / (0.01*100))

print('NOTAS:')
print(x_100 .. ' nota(s) de R$ 100.00')
print(x_50 .. ' nota(s) de R$ 50.00')
print(x_20 .. ' nota(s) de R$ 20.00')
print(x_10 .. ' nota(s) de R$ 10.00')
print(x_5 .. ' nota(s) de R$ 5.00')
print(x_2 .. ' nota(s) de R$ 2.00')
print('MOEDAS:')
print(x_1 .. ' moeda(s) de R$ 1.00')
print(x_050 .. ' moeda(s) de R$ 0.50')
print(x_025 .. ' moeda(s) de R$ 0.25')
print(x_010 .. ' moeda(s) de R$ 0.10')
print(x_005 .. ' moeda(s) de R$ 0.05')
print(x_001 .. ' moeda(s) de R$ 0.01')