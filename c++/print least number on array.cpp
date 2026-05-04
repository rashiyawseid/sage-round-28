#include <iostream>
using namespace std;
int main(){
	int numbers[5];
	int largenumber;
	cout<<"Enter 5 numbers; ";
	for(int i=0;i<=4;i++){
		cin>>numbers[i];
	}
	largenumber=numbers[0];
	for(int i=0;i<=4;i++){
		if(largenumber<numbers[i]){
			largenumber=numbers[i];
		}
		}
		cout<<"small number; "<<largenumber;
	return 0;
}
