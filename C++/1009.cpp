#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
	string name;
	double salary, total;

	cin >> name;
	cin >> salary;
	cin >> total;

	cout << fixed << setprecision(2);
	cout << "TOTAL = R$ " << salary + total*0.15 << endl;

  return 0;
}