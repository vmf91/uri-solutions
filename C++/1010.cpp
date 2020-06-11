#include <iostream>
#include <iomanip>

using namespace std;

int main() {
	int p1_code, p1_units, p2_code, p2_units;
	float p1_price, p2_price;

	cin >> p1_code >> p1_units >> p1_price;
	cin >> p2_code >> p2_units >> p2_price;

	cout << fixed << setprecision(2);
	cout << "VALOR A PAGAR: R$ " << p1_units * p1_price + p2_units * p2_price << endl;

  return 0;
}