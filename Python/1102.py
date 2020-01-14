import math

def getLineParameters(x1, y1, x2, y2):
    a = y1 - y2
    b = x2 - x1
    c = x1 * y2 - x2 * y1

    return (a, b, c)

def calcArea(x, y, r, p, q, a, t, changeBaseAngle):
    area_circle = math.pi*r*r

    l = 10
    ang_a = a + t/2
    pa = p + l * math.cos(math.radians(ang_a))
    qa = q + l * math.sin(math.radians(ang_a))

    while ang_a > 180:
        ang_a = ang_a - 360

    ang_b = a - t/2
    pb = p + l * math.cos(math.radians(ang_b))
    qb = q + l * math.sin(math.radians(ang_b))

    while ang_b > 180:
        ang_b = ang_b - 360

    if ang_a < ang_b:
        ang_a = ang_a + 360

    # Line A
    la_a, la_b, la_c = getLineParameters(p, q, pa, qa)
    dist_a = ((abs(la_a * x + la_b * y + la_c)) / math.sqrt(la_a * la_a + la_b * la_b))

    # Line B
    lb_a, lb_b, lb_c = getLineParameters(p, q, pb, qb)
    dist_b = ((abs(lb_a * x + lb_b * y + lb_c)) / math.sqrt(lb_a * lb_a + lb_b * lb_b))

    # Line BASE
    line_a, line_b, line_c = getLineParameters(p, q, x, y)
    if line_b != 0:
        ang_base = math.degrees(math.atan(-line_a/line_b))
    else:
        ang_base = 0.0

    if ang_base < 0 and q < y:
        ang_base = ang_base + 180
    elif ang_base > 0 and q > y:
        ang_base = ang_base - 180
    elif p > x:
        ang_base = 180

    if ang_base < 0 and changeBaseAngle:
        ang_base = ang_base + 360
    elif ang_base > 0 and changeBaseAngle:
        ang_base = ang_base - 360
        
    selected_a1 =  None
    selected_a2 =  None
    selected_b1 =  None
    selected_b2 =  None

    if dist_a < r:
        h_a = r - dist_a
        area_a = math.pow(r, 2) * math.acos((r-h_a)/r) - (r - h_a) * math.sqrt(2*r*h_a - math.pow(h_a, 2))

        # Solve for line A
        eq_a_a = 1 + math.pow(la_a, 2)/math.pow(la_b, 2)
        eq_a_b = -2*x + 2*la_a*la_c/(math.pow(la_b, 2))+2*la_a*y/la_b
        eq_a_c = math.pow(x, 2) + math.pow(la_c, 2)/math.pow(la_b, 2) + 2*la_c*y/la_b + math.pow(y, 2) - math.pow(r, 2)

        solve_a_x1 = (-eq_a_b + math.sqrt(math.pow(eq_a_b, 2) - 4*eq_a_a*eq_a_c))/(2*eq_a_a)
        solve_a_x2 = (-eq_a_b - math.sqrt(math.pow(eq_a_b, 2) - 4*eq_a_a*eq_a_c))/(2*eq_a_a)

        solve_a_y1 = -la_a * solve_a_x1 / la_b - la_c/la_b
        solve_a_y2 = -la_a * solve_a_x2 / la_b - la_c/la_b

        if pa > p and solve_a_x1 > p:
            selected_a1 = (solve_a_x1, solve_a_y1)
        elif pa < p and solve_a_x1 < p:
            selected_a1 = (solve_a_x1, solve_a_y1)
        elif qa > q and solve_a_y1 > q:
            selected_a1 = (solve_a_x1, solve_a_y1)
        elif qa < q and solve_a_y1 < q:
            selected_a1 = (solve_a_x1, solve_a_y1)
        
        if pa > p and solve_a_x2 > p:
            selected_a2 = (solve_a_x2, solve_a_y2)
        elif pa < p and solve_a_x1 < p:
            selected_a2 = (solve_a_x2, solve_a_y2)
        elif qa > q and solve_a_y1 > q:
            selected_a2 = (solve_a_x2, solve_a_y2)
        elif qa < q and solve_a_y1 < q:
            selected_a2 = (solve_a_x2, solve_a_y2)

    if dist_b < r:
        h_b = r - dist_b
        area_b = math.pow(r, 2) * math.acos((r-h_b)/r) - (r - h_b) * math.sqrt(2*r*h_b - math.pow(h_b, 2))

        # Solve for line B
        eq_b_a = 1 + math.pow(lb_a, 2)/math.pow(lb_b, 2)
        eq_b_b = -2*x + 2*lb_a*lb_c/(math.pow(lb_b, 2))+2*lb_a*y/lb_b
        eq_b_c = math.pow(x, 2) + math.pow(lb_c, 2)/math.pow(lb_b, 2) + 2*lb_c*y/lb_b + math.pow(y, 2) - math.pow(r, 2)

        solve_b_x1 = (-eq_b_b + math.sqrt(math.pow(eq_b_b, 2) - 4*eq_b_a*eq_b_c))/(2*eq_b_a)
        solve_b_x2 = (-eq_b_b - math.sqrt(math.pow(eq_b_b, 2) - 4*eq_b_a*eq_b_c))/(2*eq_b_a)

        solve_b_y1 = -lb_a * solve_b_x1 / lb_b - lb_c/lb_b
        solve_b_y2 = -lb_a * solve_b_x2 / lb_b - lb_c/lb_b

        if pb > p and solve_b_x1 > p:
            selected_b1 = (solve_b_x1, solve_b_y1)
        elif pb < p and solve_b_x1 < p:
            selected_b1 = (solve_b_x1, solve_b_y1)
        elif qb > q and solve_b_y1 > q:
            selected_b1 = (solve_b_x1, solve_b_y1)
        elif qb < q and solve_b_y1 < q:
            selected_b1 = (solve_b_x1, solve_b_y1)

        if pb > p and solve_b_x1 > p:
            selected_b2 = (solve_b_x2, solve_b_y2)
        elif pb < p and solve_b_x1 < p:
            selected_b2 = (solve_b_x2, solve_b_y2)
        elif qb > q and solve_b_y1 > q:
            selected_b2 = (solve_b_x2, solve_b_y2)
        elif qb < q and solve_b_y1 < q:
            selected_b2 = (solve_b_x2, solve_b_y2)

    # Distance from cannon to center of circle
    circle_distance = math.sqrt(math.pow(p-x, 2) + math.pow(q-y, 2))

    total_area = 0
    # Check if cannon is inside
    if circle_distance < r:       
        segment_distance = math.sqrt(math.pow(selected_a1[0]-selected_b1[0], 2) + math.pow(selected_a1[1]-selected_b1[1], 2))
        angle_radian = 2 * math.asin(segment_distance/(2*r))
        area_segment = math.pow(r, 2)/2 * (angle_radian - math.sin(angle_radian))

        distance_a = math.sqrt(math.pow(selected_a1[0]-p, 2) + math.pow(selected_a1[1]-q, 2))
        distance_b = math.sqrt(math.pow(selected_b1[0]-p, 2) + math.pow(selected_b1[1]-q, 2))
        area_triangule = distance_a * distance_b/2
        total_area = area_triangule+area_segment
    # Check position of circle
    elif ang_base >= ang_a and dist_a < r:
        # Line A is a possible intersection
        # Check if intersection is valid
        if pa > p and p > solve_a_x1:
            total_area = 0.0
        elif pa < p and p < solve_a_x1:
            total_area = 0.0
        elif qa > q and q > solve_a_y1:
            total_area = 0.0
        elif qa < q and q < solve_a_y1:
            total_area = 0.0
        else:
            total_area = area_a

            if selected_b1 and selected_b2:
                total_area = total_area - area_b

    elif ang_base <= ang_b and dist_b < r:
        # Line B is A possible an intersection
        # Check if intersection is valid
        if pb > p and p > solve_b_x1:
            total_area = 0.0
        elif pb < p and p < solve_b_x1:
            total_area = 0.0
        elif qb > q and q > solve_b_y1:
            total_area = 0.0
        elif qb < q and q < solve_b_y1:
            total_area = 0.0
        else:
            total_area = area_b

            if selected_a1 and selected_a2:
                total_area = total_area - area_a

    elif ang_base < ang_a and ang_base > ang_b:
        total_area = area_circle

        if dist_a < r:
            # Line A is an intersection
            total_area = total_area - area_a
            
        if dist_b < r:
            # Line B is an intersection
            total_area = total_area - area_b
    else:
        total_area = 0.0
    
    if False:
        print('Cannon points: ({:.1f}, {:.1f}), ({:.1f}, {:.1f}), ({:.1f}, {:.1f})'.format(p, q, pa, qa, pb, qb))
        print('Line: {:.1f}x + {:.1f}y  + {:.1f} = 0'.format(line_a, line_b, line_c))
        print('Line A: {:.1f}x + {:.1f}y  + {:.1f} = 0'.format(la_a, la_b, la_c))
        print('Line B: {:.1f}x + {:.1f}y  + {:.1f} = 0'.format(lb_a, lb_b, lb_c))
        print('Angles of A and B {} <-> {}'.format(ang_a, ang_b))
        print('Base angle', ang_base)

        #print('area_circle: {}'.format(area_circle))
        #print('area_a: {}'.format(area_a))
        #print('area_b: {}'.format(area_b))

    return total_area

while True:
    line = input()
    if line == "0 0 0":
        break
    
    line = line.replace('\n', '')
    line = line.split(' ')
    line = [int(x) for x in line]

    x, y, r = line

    line = input()
    line = line.replace('\n', '')
    line = line.split(' ')
    line = [int(x) for x in line]
    p, q, a, t = line

    area1 = calcArea(x, y, r, p, q, a, t, False)
    area2 = calcArea(x, y, r, p, q, a, t, True)

    if area2 > area1:
        print('{:.1f}'.format(area2))
    else:
        print('{:.1f}'.format(area1))