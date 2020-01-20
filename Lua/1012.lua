function split(s, delimiter)
    result = {};
    for match in (s..delimiter):gmatch("(.-)"..delimiter) do
        table.insert(result, match);
    end
    return result;
end

line = split(io.read(), ' ')
a = tonumber(line[1])
b = tonumber(line[2])
c = tonumber(line[3])

area_a = a*c/2
area_b = 3.14159 * c ^ 2
area_c = (a + b) * c/2 
area_d = b ^ 2
area_e = a*b

print('TRIANGULO: ' .. string.format("%0.3f", area_a))
print('CIRCULO: ' .. string.format("%0.3f", area_b))
print('TRAPEZIO: ' .. string.format("%0.3f", area_c))
print('QUADRADO: ' .. string.format("%0.3f", area_d))
print('RETANGULO: ' .. string.format("%0.3f", area_e))