function split(s, delimiter)
    result = {};
    for match in (s..delimiter):gmatch("(.-)"..delimiter) do
        table.insert(result, match);
    end
    return result;
end

function highest(a, b)
    return (a + b + math.abs(a-b))/2
end

line = split(io.read(), ' ')
a = tonumber(line[1])
b = tonumber(line[2])
c = tonumber(line[3])

x = highest(a, b)
y = highest(x, c)

print(string.format("%d", y) .. ' eh o maior')