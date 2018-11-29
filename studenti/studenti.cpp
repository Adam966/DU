//1) nacitat subor
//2)vypisat zeny
//3)vypisat <18
//4)decembrovy narodeniny
//5)panna znamenie
//6)usporiadat podla veku

#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <time.h>

typedef struct date
{
	int day;
	int month;
	int year;
}date;

typedef struct student
{
	char fname[30];
	char lname[30];
	char gender;

	struct date dob;
}student;

void showStruct(int index, student *cls);
void underAge(int index, student *cls);
void chooseFemale(int index, student *cls);
void decemberBirthday(int index, student *cls);
void virgoZodiac(int index, student *cls);
void orderByAge(int index, student *cls);

int main()
{
	FILE *file;
	file=fopen("studenti.txt","r");
	struct student class1[30];

	int index=0;
	while(fscanf(file,"%s", &class1[index].fname) != EOF)
	{
		fscanf(file,"%s", &class1[index].lname);
		fscanf(file,"%d", &class1[index].dob.day);
		fscanf(file,"%d", &class1[index].dob.month);
		fscanf(file,"%d", &class1[index].dob.year);
		fscanf(file,"%s", &class1[index].gender);

		index++;
	}

	fclose(file);

	showStruct(index, class1);
	printf("\n");
	chooseFemale(index, class1);
	printf("\n");
	underAge(index, class1);
	printf("\n");
	decemberBirthday(index, class1);
	printf("\n");
	virgoZodiac(index, class1);
	printf("\n");
	orderByAge(index, class1);
}

void chooseFemale(int index, student *cls)
{
	printf("Womens:");
	for (int i = 0; i < index; i++)
	{
		if (cls[i].gender == 'F')
			printf("\n%s %s ", cls[i].fname, cls[i].lname);
	}
}

void underAge(int index, student *cls)
{
	time_t t = time(NULL);
	struct tm tm = *localtime(&t);

	printf("\nUnder 18:");
	for (int i = 0; i < index; i++)
	{
		if (cls[i].dob.year > (tm.tm_year + 1900)-18)
			printf("\n%s %s ", cls[i].fname, cls[i].lname);
	}
}

void decemberBirthday(int index, student *cls)
{
	printf("\nBirthday in December:");
	for (int i = 0; i < index; i++)
	{
		if (cls[i].dob.month == 12)
			printf("\n%s %s ", cls[i].fname, cls[i].lname);
	}
}

void virgoZodiac(int index, student *cls)
{
	printf("\nVirgo Zodiac sign:");
	for (int i = 0; i < index; i++)
	{
		if ((cls[i].dob.day > 24 && cls[i].dob.month == 8) || (cls[i].dob.day < 23 && cls[i].dob.month == 9))
			printf("\n%s %s ", cls[i].fname, cls[i].lname);
	}
}

void orderByAge(int index, student *cls)
{
	printf("\nOrder By age:");
	for (int i = 0; i < index - 1; i++)
	{
		for (int j = 0; j < index - i - 1; j++)
		{
			if (cls[j].dob.year > cls[j+1].dob.year)
			{
				struct student temp = cls[j];
				cls[j] = cls[j+1];
				cls[j+1] = temp;
			}
		}
	}
	printf("\n");
	showStruct(index, cls);
}

void showStruct(int index, student *cls)
{
	for(int i=0; i<index; i++)
	{
		printf("%s %s ", cls[i].fname, cls[i].lname);
		printf("%d-%d-%d ", cls[i].dob.day, cls[i].dob.month, cls[i].dob.year);
		printf("%c",  cls[i].gender);
		printf("\n");
	}
}
