#include <stdio.h>

int main(){

	// Character Pointer
	char *str = "Hello";

	char *strArr[3] = {"Hello","World","C"};
	// Arrays of Character Pointer

	printf("%s \n", str);

	printf("%p \n", str);
	printf("%p \n", str+1);

	printf("%c \n", *str);
	printf("%c \n", *(str+1));
	printf("%c \n", *(++str));
	printf("%c \n", *(str++));
	printf("%c \n", *str);

	puts(strArr[0]);
	puts(strArr[1]);
	puts(strArr[2]);

	return 0;
}