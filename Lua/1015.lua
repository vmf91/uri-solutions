function split(s, delimiter)
    result = {};
    for match in (s..delimiter):gmatch("(.-)"..delimiter) do
        table.insert(result, match);
    end
    return result;
end

p1 = split(io.read(), ' ')
x1 = tonumber(p1[1])
y1 = tonumber(p1[2])

p2 = split(io.read(), ' ')
x2 = tonumber(p2[1])
y2 = tonumber(p2[2])

d = ((x2 - x1)^2 + (y2 - y1)^2)^0.5

print(string.format("%.4f", d))