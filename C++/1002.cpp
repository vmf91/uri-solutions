#include <iostream>
#include <iomanip>

using namespace std;

int main() {
	double R;
	double n = 3.14159;

	cin >> R;

	cout << fixed << setprecision(4);
	cout << "A=" << n * R * R << endl;

  return 0;
}