console.log("Decision Control System:- \n");
console.log("WAP to print the number entered by user only if the number entered is negative. ");
var n=70;
if(n>0)
console.log(n,"is positive");
else
console.log(n,"is negative");
console.log(" Write a C program to check whether a number entered by user is even or odd. ");
var n1=23;
if(n%2==0)
console.log(n,"is even");
else
console.log(n,"is odd");
console.log("Write a program find the percentage of five subject marks. If percentage is greater than or equal to 50 then print pass otherwise Print Fail. ");
var m1=80,m2=90,m3=80,m4=90,m5=60;
var p=(m1+m2+m3+m4+m5)/5;
if(p>50)
console.log("pass");
else
console.log("fail");
console.log("Write a program to find the weather it is leap year or Not.");
var y=3232;
if(y%4==0)
console.log("leap yaer");
else
console.log("not a leap yaer");
console.log("While purchasing certain items, a discount of 10% is offered if the quantity purchased is more than 1000. If quantity and price per item are input through the keyboard, write a program to calculate the total expenses. ");
var quantity=3000;
var price=200;
if(quantity>1000)
{
    var tprice=(3000*200)*10/100;
    console.log("total with 10% discount",tprice);
}
else{
    var tprice=3000*2000;
    console.log("total without 10% discount",tprice);
}
console.log("The marks obtained by a student in 5 different subjects are input through the keyboard. The student gets a division as per the following rules:\n Percentage above or equal to 60 - First division\n Percentage between 50 and 59 - Second division\n Percentage between 40 and 49 - Third division\n Percentage less than 40 – Fail\nWrite a program to calculate the division obtained by the student.");
var m1=80,m2=90,m3=80,m4=90,m5=60;
var p=(m1+m2+m3+m4+m5)/5;
if(p>=60)
console.log("First division");
else if(p>=50&&p<=59)
console.log(" Second division");
else if(p>=40&&p<=49)
console.log(" Third division");
else 
console.log("Fail");
console.log("If the ages of Ram, Shyam and Ajay are input through the keyboard, write a program to determine the youngest of the three. ");
var ramage=23,shyamage=32,ajayage=43;
if(ramage<shyamage && ramage<ajayage)
    console.log("Ram is youngest");
else if(ramage>shyamage && shyamage<ajayage)
    console.log("Shyam is youngest");
else
     console.log("Ajay is youngest");
console.log(" WAP to check whether a triangle is valid or not, when the three angles of the triangle are entered through the keyboard. A triangle is valid if the sum of all the three angles is equal to 180 degrees. ");
 var a=30,b=45,c=60;
 var s=a+b+c;
 if (s==180)
    console.log("valid triangle");
else
console.log("not a valid triangle");
console.log(" Given the length and breadth of a rectangle, write a program to find whether the area of the rectangle is greater than its perimeter.");
var s1=40,s2=30;
var area=s1*s2;
var per=2*(s1+s2);
if(area>per)
    console.log("area is greater than perimeter");
else
    console.log("perimeter is greater than area");
// 7,8,13

