p1 = input()
p1_code, p1_units, p1_price = p1.split(' ')

p2 = input()
p2_code, p2_units, p2_price = p2.split(' ')

p1_units = int(p1_units)
p2_units = int(p2_units)

p1_price = float(p1_price)
p2_price = float(p2_price)

total = p1_units * p1_price + p2_units * p2_price

print("VALOR A PAGAR: R$ {:.2f}".format(total))