#include <iostream>
using namespace std;
int main(){
	int numbers[5];
	cout<<"Enter 5 numbers; ";
	for(int i=0;i<=4;i++){
		cin>>numbers[i]    ;
	}
	for(int i=0;i<=4;i++){
		cout<<numbers[i]<<endl;
	}
	return 0;
}
