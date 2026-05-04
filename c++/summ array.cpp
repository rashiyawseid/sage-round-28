#include <iostream>
using namespace std;
int main(){
	int numbers[5];
	int sum=0;
	cout<<"Enter 5 numbers: ";
	for(int i=0;i<=4;i++){
		cin>>numbers[i];
		sum = sum + numbers[i];
	}
	for(int i=0;i<=4;i++){
	}
	cout<<sum;
	return 0;
}
