function split(s, delimiter)
    result = {};
    for match in (s..delimiter):gmatch("(.-)"..delimiter) do
        table.insert(result, match);
    end
    return result;
end

p1 = split(io.read(), ' ')
p1_code = tonumber(p1[1])
p1_units = tonumber(p1[2])
p1_price = tonumber(p1[3])

p2 = split(io.read(), ' ')
p2_code = tonumber(p2[1])
p2_units = tonumber(p2[2])
p2_price = tonumber(p2[3])

total = p1_units * p1_price + p2_units * p2_price

print("VALOR A PAGAR: R$ " .. string.format("%0.2f", total))