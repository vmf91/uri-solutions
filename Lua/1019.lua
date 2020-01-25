n = tonumber(io.read())

s = n%60
m_t = (n - s)/60
m = math.floor(m_t%60)
h = math.floor((m_t - m)/60)

print(h .. ':' .. m .. ':' .. s)