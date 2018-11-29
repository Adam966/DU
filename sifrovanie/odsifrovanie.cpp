#include <stdio.h>
#include <ctype.h>

int main()
{
	char data;
	
	FILE *file;
	
	file = fopen("sifrovanytext.txt","r");
	if(file == NULL) {
    	perror("Error in opening file");
    	return(1);
	}
	
	while((data=fgetc(file)) != EOF)
	{
		if(isupper(data))
		{
			if(data<=67 && data>=65)
				data+=23;
			else
				data-=3;
		}

		if(isdigit(data))
			data++;
		
		if(islower(data))
		{
			if(data<=99 && data>=97)
				data+=23;
			else
				data-=3;
		}
		
		printf("%c", data);
	}	
}
