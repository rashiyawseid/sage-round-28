#include <iostream>
using namespace std;
int main(){
	double number;
	cout<<"enter the no: ";
	cin>>number;
	if (number>0){
		cout<<"posetive";
	}
	else if(number==0){
		cout<<"zero";
	}
	else{
		cout<<"negative";
	}
	return 0;
}
