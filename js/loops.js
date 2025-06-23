console.log("hello 10 times  is");
for(var i=1;i<=10;i++)
{
    console.log("hello");
}
console.log("numbers 1 to 10 is");
for(var i=1;i<=10;i++)
{
    console.log(i);
}
console.log("table of n is");
var n=2;
for(var i=1;i<=10;i++)
{
    console.log(n*i);
}
console.log("table of n with alternate no. is");
var n=2;
for(var i=1;i<=20;i+=2)
{
    console.log(n*i);
}
console.log("value of one number raised to the power of another.");
var n=2,p=5,s=1;
for(var i=1;i<=p;i++)
{
    s*=n;
}
  console.log(s);
console.log(" all Evan No B/W 1 to 100. ");
for(var i=1;i<=100;i++)
{
    if(i%2==0)
    console.log(i);
}
console.log(" sum of digits of given integer number");
var n=2345,r=0,s=0;
while(n>0)
{
r=n%10;
s=s+r;
n=parseInt(n/10);
}
console.log("n=",n1,"and sum is",s);
console.log(" check given number is prime or not. ");
var n=8,c=0;
for(i=1;i<=n;i++)
{
    if(n%i==0)
        c++;
}
if(c==2)
    console.log("n",n,"is prime");
else
    console.log("n",n,"is  not a prime");
console.log(" calculate Sum of digits B/W 1 to 10.")
var s=0;
for(var i=1;i<=10;i++)
{
   s=s+i;
}
 console.log("sum is",s);
  console.log("factorial of given");
  var s=1,n1=10;
for(var i=1;i<=n1;i++)
{
   s=s*i;
}
 console.log("factorial of n",n1,"is",s);
 console.log("reverse the any four Digit No. ");
 var n=2345,r=0,s=0;
while(n>0)
{
r=n%10;
s=s*10+r;
n=parseInt(n/10);
}
console.log("n=",n1,"and reverse is",s);
console.log("No is palindrome or Not");
var n=1331,p=n,r=0,s=0;
while(n>0)
{
r=n%10;
s=s*10+r;
n=parseInt(n/10);
}
if(p==s)
    console.log(p,"is palindrome");
else
    console.log(p,"is not palindrome");
console.log("calculate HCF of Two given number");
var a=20,b=10;
var a1=a,b1=b;
while(a>0&&b>0){
if(a>=b)
    a=a-b;
else
b=b-a;
}
if(a==0)
    console.log("hcf of a",a1,"b=",b1,"is",b);
else
     console.log("hcf of a",a1,"b=",b1,"is",a);

console.log("Armstrong numbers between 1 and 500");
var p=0,s,r=0;
for(var i=1;i<=500;i++)
{
    p=i;
    s=0;
    r=0;
    while(p>0)
    {
        r=p%10;
        s=s+r*r*r;
        p=parseInt(p/10);
    }
    if(i==s)
        console.log(i);
    else 
    continue;
}
console.log("1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/n  ")
var n=5,s=0;
for(i=1;i<=n;i++)
{
    s=s+1/i;
}
console.log("sum is",s);
console.log("1 - 1/2 + 1/3 - 1/4 + 1/5 -... 1/n ");
var n=5,s=0;
for(i=1;i<=n;i++)
{
    if(i%2==0)
    s=s+(-1)/i;
    else
     s=s+(1)/i;
}
console.log("sum is",s);
