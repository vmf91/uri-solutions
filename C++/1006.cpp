#include <iostream>
#include <iomanip>

using namespace std;

int main() {
	double a, b, c;

	cin >> a;
	cin >> b;
	cin >> c;

	cout << fixed << setprecision(1);
	cout << "MEDIA = " << (a * 2 + b * 3 + c * 5)/(2 + 3 + 5) << endl;

  return 0;
}