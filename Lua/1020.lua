n = tonumber(io.read())

y = math.floor(n / 365)
y_r = n % 365

m = math.floor(y_r / 30)
d = y_r % 30

print(y .. ' ano(s)')
print(m .. ' mes(es)')
print(d .. ' dia(s)')