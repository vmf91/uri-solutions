function split(s, delimiter)
    result = {};
    for match in (s..delimiter):gmatch("(.-)"..delimiter) do
        table.insert(result, match);
    end
    return result;
end

function mdc(a, b)
    while (b > 0)
    do
        c = b
        b = a % b
        a = c
    end
    return a
end

n = tonumber(io.read())

for i = 1, n, 1
do 
    line = split(io.read(), ' ')
    
    n1 = tonumber(line[1])
    d1 = tonumber(line[3])
    op = line[4]
    n2 = tonumber(line[5])
    d2 = tonumber(line[7])

    n3 = 0
    d3 = 0

    if op == "+" then
        n3 = n1*d2 + n2*d1
        d3 = d1*d2
    elseif op == "-" then
        n3 = n1*d2 - n2*d1
        d3 = d1*d2
    elseif op == "*" then
        n3 = n1*n2
        d3 = d1*d2
    elseif op == "/" then
        n3 = n1*d2
        d3 = n2*d1
    end

    x = mdc(n3, d3)

    n4 = math.floor(n3/x)
    d4 = math.floor(d3/x)

    print(n3 .. '/' .. d3 .. ' = ' .. n4 .. '/' .. d4)
end