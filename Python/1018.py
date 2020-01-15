n = int(input())

x_100 = n//(100)
r_100 = n%(100)

x_50 = r_100//(50)
r_50 = r_100%(50)

x_20 = r_50//(20)
r_20 = r_50%(20)

x_10 = r_20//(10)
r_10 = r_20%(10)

x_5 = r_10//(5)
r_5 = r_10%(5)

x_2 = r_5//(2)
r_2 = r_5%(2)

x_1 = r_2//(1)

print(n)
print('{} nota(s) de R$ 100,00'.format(x_100))
print('{} nota(s) de R$ 50,00'.format(x_50))
print('{} nota(s) de R$ 20,00'.format(x_20))
print('{} nota(s) de R$ 10,00'.format(x_10))
print('{} nota(s) de R$ 5,00'.format(x_5))
print('{} nota(s) de R$ 2,00'.format(x_2))
print('{} nota(s) de R$ 1,00'.format(x_1))