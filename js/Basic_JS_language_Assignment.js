console.log("Write a Program to Print Hello? ");
console.log("Hello");
console.log(" Write a program to print “Hello”? (hint:- Escape Sequence)");
console.log("Hello\tWorld\t......");
console.log("Write a program to Perform Addition Of two No. Entered through the Keyboard. ");
var a=5
var b=2
console.log("a+b=",a+b);
console.log("Write a Program to calculate Simple Interest for any Principle Amount.");
var p=2000;
var r=2
var t=5
console.log(p*r*t/100);
console.log(" Write a Program to calculate the Average of five Subject marks. ");
var m1=80,m2=90,m3=80,m4=90,m5=60;
console.log((m1+m2+m3+m4+m5)/5);
console.log("Ramesh’s basic salary is input through the keyboard. His dearness allowance is 40% of basic salary and house rent allowance is 20% of basic salary. WAP to calculate his gross salary. ");
var bs=2000;
var da=40*2000/100;
var hr=20*2000/100;
console.log("gross salary is",da+hr);
console.log("Write a Program to calculate the area of Circle and Rectangle. ");
var r=5,l=20,b=30;
console.log("area of circle is",3.14*r*r);
console.log("area of Rectangle is",l*b);
console.log(" Temperature of a city in Fahrenheit degrees is input through the keyboard. Write a program to convert this temperature into Centigrade degrees.");
var tf=273;
console.log("temperature in celsius is",(tf-32)*5/9);
console.log(" Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.");
var c=4;
var d=9;
c=c+d;
d=c-d;
c=c-d;
console.log("c=4 and d=9 after swap c=",c,"d=",d);
console.log(" Enter the four Digits no. through the Keyboard? WAP to find the sum of its first and last Digit. ");
var n=4523;
var fd=n/1000,ld=n%10;
console.log("n=",n,"sum of first and last is",fd+ld);
console.log("Enter the four Digits no. through the Keyboard? WAP to find the sum of its Middle two Digits.");
var md1=(n/100)%10,md2=(n/10)%10;
console.log("n=",n,"sum of middle 2 digit is",md1+md2);
console.log(" Enter the four Digits no. through the Keyboard? WAP to find the sum of its all digits. ");
console.log("n=",n,"sum of all digit=",fd+md1+md2+ld);
console.log(" Enter the four Digits no through the Keyboard? Write a program to reverse the No. ");
console.log("n=",n,"reverse No. is",ld*1000+md2*100+md1*10+fd);
console.log(". If a five-digit number is input through the keyboard, write a program to print a new number by adding one to each of its digits. For example if the number that is input is 12391 then the output should be displayed as 23402. ");
console.log("n=",n,"n by adding 1 to each digit",n+1111);
console.log(". A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.");
var amount=999;
var hnote=amount/100;
var fnote=(amount-hnote*100)/50;
var tnote=(amount-hnote*100-fnote*50)/10;
console.log("amount is",amount,"100s note=",hnote,"50s note=",fnote,"10s note=",tnote);

