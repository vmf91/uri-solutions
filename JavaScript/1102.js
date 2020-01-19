var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function getLineParameters(x1, y1, x2, y2) {
    var a = y1 - y2
    var b = x2 - x1
    var c = x1 * y2 - x2 * y1

    return [a, b, c]
}

function calcArea(x, y, r, p, q, a, t, changeBaseAngle) {
    var area_circle = Math.PI * r * r

    var l = 10
    var ang_a = a + t / 2
    var pa = p + l * Math.cos(toRadians(ang_a))
    var qa = q + l * Math.sin(toRadians(ang_a))

    while (ang_a > 180) {
        ang_a = ang_a - 360
    }

    var ang_b = a - t / 2
    var pb = p + l * Math.cos(toRadians(ang_b))
    var qb = q + l * Math.sin(toRadians(ang_b))

    while (ang_b > 180) {
        ang_b = ang_b - 360
    }

    if (ang_a < ang_b) {
        ang_a = ang_a + 360
    }

    // Line A
    var params_a = getLineParameters(p, q, pa, qa)
    var la_a = params_a[0]
    var la_b = params_a[1]
    var la_c = params_a[2]
    var dist_a = ((Math.abs(la_a * x + la_b * y + la_c)) / Math.sqrt(la_a * la_a + la_b * la_b))

    // Line B
    var params_b = getLineParameters(p, q, pb, qb)
    var lb_a = params_b[0]
    var lb_b = params_b[1]
    var lb_c = params_b[2]
    var dist_b = ((Math.abs(lb_a * x + lb_b * y + lb_c)) / Math.sqrt(lb_a * lb_a + lb_b * lb_b))

    // Line BASE
    var params_c = getLineParameters(p, q, x, y)
    var line_a = params_c[0]
    var line_b = params_c[1]
    var line_c = params_c[2]

    var ang_base = 0
    if (line_b != 0) {
        ang_base = toDegrees(Math.atan(-line_a / line_b))
    }
    else ang_base = 0.0

    if (ang_base < 0 && q < y) {
        ang_base = ang_base + 180
    }
    else if (ang_base > 0 && q > y) {
        ang_base = ang_base - 180
    }
    else if (p > x) {
        ang_base = 180
    }

    if (ang_base < 0 && changeBaseAngle) {
        ang_base = ang_base + 360
    }
    else if (ang_base > 0 && changeBaseAngle) {
        ang_base = ang_base - 360
    }

    var selected_a1 = 0
    var selected_a2 = 0
    var selected_b1 = 0
    var selected_b2 = 0

    var area_a = 0
    var area_b = 0
    if (dist_a < r) {
        var h_a = r - dist_a
        area_a = Math.pow(r, 2) * Math.acos((r - h_a) / r) - (r - h_a) * Math.sqrt(2 * r * h_a - Math.pow(h_a, 2))

        // Solve for line A
        var eq_a_a = 1 + Math.pow(la_a, 2) / Math.pow(la_b, 2)
        var eq_a_b = -2 * x + 2 * la_a * la_c / (Math.pow(la_b, 2)) + 2 * la_a * y / la_b
        var eq_a_c = Math.pow(x, 2) + Math.pow(la_c, 2) / Math.pow(la_b, 2) + 2 * la_c * y / la_b + Math.pow(y, 2) - Math.pow(r, 2)

        var solve_a_x1 = (-eq_a_b + Math.sqrt(Math.pow(eq_a_b, 2) - 4 * eq_a_a * eq_a_c)) / (2 * eq_a_a)
        var solve_a_x2 = (-eq_a_b - Math.sqrt(Math.pow(eq_a_b, 2) - 4 * eq_a_a * eq_a_c)) / (2 * eq_a_a)

        var solve_a_y1 = -la_a * solve_a_x1 / la_b - la_c / la_b
        var solve_a_y2 = -la_a * solve_a_x2 / la_b - la_c / la_b

        if ((pa > p && qa > q && solve_a_x1 > p && solve_a_y1 > q) ||
            (pa > p && qa < q && solve_a_x1 > p && solve_a_y1 < q) ||
            (pa < p && qa > q && solve_a_x1 < p && solve_a_y1 > q) ||
            (pa < p && qa < q && solve_a_x1 > p && solve_a_y1 > q)) {
            selected_a1 = [solve_a_x1, solve_a_y1]
        }

        if ((pa > p && qa > q && solve_a_x2 > p && solve_a_y2 > q) ||
            (pa > p && qa < q && solve_a_x2 > p && solve_a_y2 < q) ||
            (pa < p && qa > q && solve_a_x2 < p && solve_a_y2 > q) ||
            (pa < p && qa < q && solve_a_x2 > p && solve_a_y2 > q)) {
            selected_a2 = [solve_a_x2, solve_a_y2]
        }

    }

    if (dist_b < r) {
        var h_b = r - dist_b
        area_b = Math.pow(r, 2) * Math.acos((r - h_b) / r) - (r - h_b) * Math.sqrt(2 * r * h_b - Math.pow(h_b, 2))

        // Solve for line A
        var eq_b_a = 1 + Math.pow(lb_a, 2) / Math.pow(lb_b, 2)
        var eq_b_b = -2 * x + 2 * lb_a * lb_c / (Math.pow(lb_b, 2)) + 2 * lb_a * y / lb_b
        var eq_b_c = Math.pow(x, 2) + Math.pow(lb_c, 2) / Math.pow(lb_b, 2) + 2 * lb_c * y / lb_b + Math.pow(y, 2) - Math.pow(r, 2)

        var solve_b_x1 = (-eq_b_b + Math.sqrt(Math.pow(eq_b_b, 2) - 4 * eq_b_a * eq_b_c)) / (2 * eq_b_a)
        var solve_b_x2 = (-eq_b_b - Math.sqrt(Math.pow(eq_b_b, 2) - 4 * eq_b_a * eq_b_c)) / (2 * eq_b_a)

        var solve_b_y1 = -lb_a * solve_b_x1 / lb_b - lb_c / lb_b
        var solve_b_y2 = -lb_a * solve_b_x2 / lb_b - lb_c / lb_b

        if ((pb > p && qb > q && solve_b_x1 > p && solve_b_y1 > q) ||
            (pb > p && qb < q && solve_b_x1 > p && solve_b_y1 < q) ||
            (pb < p && qb > q && solve_b_x1 < p && solve_b_y1 > q) ||
            (pb < p && qb < q && solve_b_x1 < p && solve_b_y1 < q)) {
            selected_b1 = [solve_b_x1, solve_b_y1]
        }

        if ((pb > p && qb > q && solve_b_x2 > p && solve_b_y2 > q) ||
            (pb > p && qb < q && solve_b_x2 > p && solve_b_y2 < q) ||
            (pb < p && qb > q && solve_b_x2 < p && solve_b_y2 > q) ||
            (pb < p && qb < q && solve_b_x2 < p && solve_b_y2 < q)) {
            selected_b2 = [solve_b_x2, solve_b_y2]
        }
    }

    // Distance from cannon to center of circle
    var circle_distance = Math.sqrt(Math.pow(p - x, 2) + Math.pow(q - y, 2))

    var total_area = 0
    // Check if cannon is inside
    if (circle_distance < r) {
        var segment_distance = Math.sqrt(Math.pow(selected_a1[0] - selected_b1[0], 2) + Math.pow(selected_a1[1] - selected_b1[1], 2))
        var angle_radian = 2 * Math.asin(segment_distance / (2 * r))
        var area_segment = Math.pow(r, 2) / 2 * (angle_radian - Math.sin(angle_radian))

        var distance_a = Math.sqrt(Math.pow(selected_a1[0] - p, 2) + Math.pow(selected_a1[1] - q, 2))
        var distance_b = Math.sqrt(Math.pow(selected_b1[0] - p, 2) + Math.pow(selected_b1[1] - q, 2))
        var area_triangule = distance_a * distance_b / 2
        total_area = area_triangule + area_segment
    }

    // Check position of circle
    else if (ang_base >= ang_a && dist_a < r) {
        // Line A is a possible intersection
        // Check if intersection is valid
        if (pa > p && p > solve_a_x1) {
            total_area = 0.0
        }
        else if (pa < p && p < solve_a_x1) {
            total_area = 0.0
        }
        else if (qa > q && q > solve_a_y1) {
            total_area = 0.0
        }
        else if (qa < q && q < solve_a_y1) {
            total_area = 0.0
        }
        else {
            total_area = area_a
        }

        if (selected_b1 && selected_b2) {
            total_area = total_area - area_b
        }
    }
    else if (ang_base <= ang_b && dist_b < r) {
        // Line B is A possible an intersection
        // Check if intersection is valid
        if (pb > p && p > solve_b_x1) {
            total_area = 0.0
        }
        else if (pb < p && p < solve_b_x1) {
            total_area = 0.0
        }
        else if (qb > q && q > solve_b_y1) {
            total_area = 0.0
        }
        else if (qb < q && q < solve_b_y1) {
            total_area = 0.0
        }
        else {
            total_area = area_b
        }

        if (selected_a1 && selected_a2) {
            total_area = total_area - area_a
        }
    }
    else if (ang_base < ang_a && ang_base > ang_b) {
        total_area = area_circle

        if (dist_a < r) {
            // Line A is an intersection
            total_area = total_area - area_a
        }

        if (dist_b < r) {
            // Line B is an intersection
            total_area = total_area - area_b
        }
    }
    else total_area = 0.0

    if (false) {
        console.log(`Cannon points: (${p.toFixed(4)}, ${q.toFixed(4)}), (${pa.toFixed(4)}, ${qa.toFixed(4)}), (${pb.toFixed(4)}, ${qb.toFixed(4)})`)
        console.log('Line: ' + line_a.toFixed(4) + 'x + ' + line_b.toFixed(4) + 'y  + ' + line_c.toFixed(4) + ' = 0')
        console.log('Line: ' + la_a.toFixed(4) + 'x + ' + la_b.toFixed(4) + 'y  + ' + la_c.toFixed(4) + ' = 0')
        console.log('Line: ' + lb_a.toFixed(4) + 'x + ' + lb_b.toFixed(4) + 'y  + ' + lb_c.toFixed(4) + ' = 0')
        console.log('Angles of A && B', ang_a, ang_b)
        console.log('Base angle', ang_base)
        console.log('dist_a', dist_a)
        console.log('selected_a', selected_a1, selected_a2)
        console.log('selected_b', selected_b1, selected_b2)
    }
    //console.log('area_circle: {}'.format(area_circle))
    //console.log('area_a: {}'.format(area_a))
    //console.log('area_b: {}'.format(area_b))

    return total_area
}

while (true) {
    var line = lines.shift();
    if (line == "0 0 0") {
        break
    }

    line = line.replace('\n', '')
    line = line.split(' ')

    var x = parseInt(line[0])
    var y = parseInt(line[1])
    var r = parseInt(line[2])

    line = lines.shift();
    line = line.replace('\n', '')
    line = line.split(' ')

    var p = parseInt(line[0])
    var q = parseInt(line[1])
    var a = parseInt(line[2])
    var t = parseInt(line[3])

    area1 = calcArea(x, y, r, p, q, a, t, false)
    area2 = calcArea(x, y, r, p, q, a, t, true)

    if (area2 > area1) {
        console.log(area2.toFixed(1))
    }
    else console.log(area1.toFixed(1))
}