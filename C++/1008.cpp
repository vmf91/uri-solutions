#include <iostream>
#include <iomanip>

using namespace std;

int main() {
	int n, hours;
	double value;

	cin >> n;
	cin >> hours;
	cin >> value;

	cout << "NUMBER = " << n << endl;
	cout << fixed << setprecision(2);
	cout << "SALARY = U$ " << hours * value << endl;

  return 0;
}