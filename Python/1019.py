n = int(input())

s = n %(60)
m_t = int((n - s)/60)
m = m_t%60
h = int((m_t - m)/60)

print('{}:{}:{}'.format(h, m, s))