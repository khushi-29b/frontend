2,3,4,14
console.log("Q-1");
var arr=[0];
for(var i=1;i<=100;i++)
{
     arr[i-1]=i;
}
console.log(arr);
console.log("missing number is:");
arr[63]=0;
arr[67]=90;
for(var i=1;i<=100;i++)
{
    if(arr[i]!=i)
        console.log(i);
}
console.log("Q-5");
var arr1=[1,2,3,4,5];
var arr2=[2,3,1,0,5];
var c=0;
for(var i=0;i<5;i++)
{
    for(var j=0;j<5;j++)
    {
          if(arr1[i]==arr2[j])
            c++;
    }
}
if(c==5)
    console.log("no number is missing");
else{
    console.log("no is missing");
    arr1.sort();
    arr2.sort();
    for(var i=0;i<5;i++)
    {
        if(arr1[i]!=arr2[j+1])
            console.log(arr1[i]);
    }
}
console.log("Q-6");
if(arr1.length==arr2.length)
{
    console.log("size is equal");
}
else
{
    console.log("size is not equal");
}
console.log("Q-7");
max=0;
min=arr1[0];
console.log(arr1);
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]>max)
        max=arr1[i];
    if(arr1[i]<min)
        min=arr1[i];
}
console.log("max is",max,"min is",min);
console.log("Q-8");
arr1.sort();
console.log("Second highest no is",arr1[arr1.length-2]);
console.log("Q-9");
console.log("top 1st max no is",arr1[arr1.length-1],"and top 2nd highest no is",arr1[arr1.length-2]);
console.log("Q-10 array in reverse is");
console.log(arr1);
for(var i=arr1.length-1;i>=0;i--)
{
    console.log(arr1[i]);
}
console.log("Q-11 reversing using method");
console.log(arr1.reverse());
console.log("Q-12");
var c=0;
console.log(arr1);
for(var i=0;i<arr1.length;i++)
{
    c++;
}
console.log("length is",c);
console.log("Q-13");
console.log(arr1);
arr1[arr1.length]=23;
console.log(arr1);
console.log("Q-15 deleting last elemnt");
console.log(arr1);
for(var i=0;i<arr1.length;i++)
{
    arr1[arr1.length-1]=0;
}
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]!=0)
        console.log(arr1[i]);
}
console.log("Q-16 deleting number 3");
var num=3;
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]==num)
    arr1[i]=0;
}
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]!=0)
        console.log(arr1[i]);
}
console.log("Q-17 deleting elemnet at index 2");
arr1=[23,32,44,45,78,98,65,11];
console.log(arr1);
var num=3;
for(var i=0;i<arr1.length;i++)
{
    if(i==num)
    arr1[i]=0;
}
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]!=0)
        console.log(arr1[i]);
}
console.log("Q-18 sum of array elemnetis");
console.log(arr1);
var s=0
for(var i=0;i<arr1.length;i++)
{
    s=s+arr1[i];
}
console.log("sum is",s);
console.log("Q-19 even elements are");
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]%2==0)
        console.log(arr1[i]);
}
console.log("Q-20 odd elements are");
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]%2!=0)
        console.log(arr1[i]);
}
console.log("Q-21 left rotation of array is");
