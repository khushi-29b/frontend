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
for(var i=0;i<5;i++)
{
    if()
}