#include <iostream>
using namespace std;
int main(){
	int score;
	cout<<"the result is:";
	cin>>score;
	if(score>=90){
	cout<<"very good";
	}
	else if(score>=50) {
		cout<<"pass";
	}
	else{
		cout<<"fail";
	}
	
	return 0;
}
