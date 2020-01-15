n = input('')
n = int(float(n) * 100)

x_100 = n//(100*100)
r_100 = n%(100*100)

x_50 = r_100//(50*100)
r_50 = r_100%(50*100)

x_20 = r_50//(20*100)
r_20 = r_50%(20*100)

x_10 = r_20//(10*100)
r_10 = r_20%(10*100)

x_5 = r_10//(5*100)
r_5 = r_10%(5*100)

x_2 = r_5//(2*100)
r_2 = r_5%(2*100)

x_1 = r_2//(1*100)
r_1 = r_2%(1*100)

x_050 = r_1//(0.5*100)
r_050 = r_1%(0.5*100)

x_025 = r_050//(0.25*100)
r_025 = r_050%(0.25*100)

x_010 = r_025//(0.1*100)
r_010 = r_025%(0.1*100)

x_005 = r_010//(0.05*100)
r_005 = r_010%(0.05*100)

x_001 = (n%(0.05*100))//(0.01*100)

print('NOTAS:')
print('{} nota(s) de R$ 100.00'.format(x_100))
print('{} nota(s) de R$ 50.00'.format(x_50))
print('{} nota(s) de R$ 20.00'.format(x_20))
print('{} nota(s) de R$ 10.00'.format(x_10))
print('{} nota(s) de R$ 5.00'.format(x_5))
print('{} nota(s) de R$ 2.00'.format(x_2))
print('MOEDAS:')
print('{} moeda(s) de R$ 1.00'.format(int(x_1)))
print('{} moeda(s) de R$ 0.50'.format(int(x_050)))
print('{} moeda(s) de R$ 0.25'.format(int(x_025)))
print('{} moeda(s) de R$ 0.10'.format(int(x_010)))
print('{} moeda(s) de R$ 0.05'.format(int(x_005)))
print('{} moeda(s) de R$ 0.01'.format(int(x_001)))