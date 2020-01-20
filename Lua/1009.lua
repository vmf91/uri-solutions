a = tonumber(io.read())
b = tonumber(io.read())
c = tonumber(io.read())

x = b + 0.15 * c

print('TOTAL = R$ ' .. string.format("%0.2f", x))