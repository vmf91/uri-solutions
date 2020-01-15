n = int(input())

for i in range(n):
    line = input()
    line2 = []

    for i in range(len(line)):
        if line[i].isalpha():
            c = chr(ord(line[i]) + 3)
            line2.append(c)
        else:
            line2.append(line[i])

    # Reverse line2
    line = line2[::-1]
    line2 = line
    for i in range(len(line)):
        if i >= int(len(line)/2):
            line2[i] = chr(ord(line2[i]) - 1)
    
    line2 = ''.join(line2)
    print('{}'.format(line2))
    