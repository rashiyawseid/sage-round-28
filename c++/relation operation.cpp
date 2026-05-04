#include <iostream>
using namespace std;
int main(){
	int a=50,b=50;
	bool grater=a>b;
	bool leasthan=a<b;
	bool graterthanorequal=a>=b;
	bool leasthanorequal=a<=b;
	bool equal=a==b;
	bool notequal=a!=b;
	cout<<"a: " <<a<<"  "<<"b: " <<b<<endl;
	cout<<"graterthan:"<<grater<<endl;
	cout<<"leasthan:"<<leasthan<<endl;
	cout<<"graterthanorequal:"<<graterthanorequal<<endl;
	cout<<"leasthanorequal:"<<leasthanorequal<<endl;
	cout<<"equal:"<<equal<<endl;
	cout<<"notequal:"<<notequal<<endl;
	bool andoperator  =true && false;
	bool oroperator  =true || false;	
	cout<<"and operator:"<<andoperator <<endl;
	cout<<"or operator:"<<oroperator  <<endl;
	return 0;
	
}
