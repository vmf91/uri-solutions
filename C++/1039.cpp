#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
	int r1, x1, y1, r2, x2, y2;
	double d;

	while(cin >> r1 >> x1 >> y1 >> r2 >> x2 >> y2){
		d = sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
		if(d + r2 <= r1){
			cout << "RICO" << endl;
		}else{
			cout << "MORTO" << endl;
		}
	}

  return 0;
}