#include <iostream>
using namespace std;
int main(){
	int day;
	cout<<"enter the no:";
	cin>>day;
    switch(day){
	     case 1:
		cout<<"monday";
		break;
	     case 2:
		cout<<"tu";
		break;
	      case 3:
		cout<<"wed";
		break;
	     case 4:
		cout<<"th";
		break;
	     case 5:
		cout<<"fr";
		break;
	     default:
	     cout<<"day not found";
	}

	
	return 0;
}
