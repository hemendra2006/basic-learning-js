// console.log("hemendra Singh");
// console.log("welcome to Engineering world");


// fullname ="hemendra singh";
// console.log(fullname);


// let age;

// age=25;

// console.log(age);


// let Student ={
//     fullname: "hemendra singh",
//     age: 22,
//     sgpa: 6.0 ,
//     ispass: true,
//     year : 26
// };




// let marks = prompt("enter a number(0-100):");
// let Grade;
// if(marks >= 80 && marks <=100){
//     Grade = "A";  
// }else if(marks >=70 && marks<=89){
//     Grade = "B";
// }else if(marks >=60 && marks<=69){
//     Grade = "C";
// }else if(marks >=50 && marks<=59){
//     Grade = "D";
// }else if(marks >=0 && marks<=49){
//     Grade = "F"
// }
// console.log("Accordingh to score, your grade was:", Grade);


// let fullname;
// fullname ="hemendra singh";
// for(i=1;i<=10;i++){
//     console.log(fullname);
// }




// let sum = 0;
//for(i=1;i<=50;i++){
// sum = sum + i
// }
// console.log(sum);




// for( let i=0;i<=100;i++){
//      if(i%2===0){
//     console.log(i);
// }
// }


// let gameNum = 25;
// let userNum = prompt("enter the number:");
// while(userNum != gameNum){
//      userNum = prompt("you enter wrong number,guess again");
// }
// console.log("congratulation");


 //let fullname = prompt("Enter their fullName : ");
 //userName = ("@" + fullname + fullname.length)
// console.log(userName);


// let family = ["ramratan", "safadi" , "devendra","rajkumari","hemendra","eesha","ashok","sangita","eshant","Lalit","sunita","ekansh","bhargavi","kaushal"];
// for(let i=0;i<family.length;i++){
//     console.log(family[i]);
// }


// let marks =[20,20,20,20,10,10];
// let sum =0;
//  for(let val of marks){
//     sum+=val;
// }
// sum = sum / marks.length
// console.log('the average is',sum );


// let items =[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     offer=val/10;
//     items[i] = items[i] - offer;   
//     console.log(items[i]);
//     i++;
// }


// let companies=["bloomberg", "microsoft","uber","google","ibm","netflix"];
//   companies.shift();
// companies.splice(2,1,"ola");
// companies.push("amazon");
// console.log(companies)
 

// let str ="hemendrasingh";
// size = 0
// for (let i of str){
//   console.log("i=", i)
//   size++;
// }
// console.log("string size", size);

// let str = "hemendra singh";


// let str1 = "01234567";
// let str2 = "hemendra singh";
// // console.log(str1.concat(str2));
// // console.log(str2.replace("hemendra", "devendra"));
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str2.slice(0,8));
// console.log(str2.slice(9,15));
// console.log(str2.split(' '));
// console.log(str2.split('').reverse().join(''));
// console.log(str2.includes("singh"));
// console.log(str2.indexOf("singh"));
// console.log(str2.charAt(0));



// ARRAY -----------------


// let arr = [1,2,3,4,5];
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// let name = ["hemendra", "Eesha", "devendra", "rajkumari"];
// console.log(name.length);
// console.log(name[0]);
// console.log(name[name.length-1]);
// console.log(name.join(","));
// console.log(name.slice(0,2));
// console.log(name.slice(2,4));
// console.log(name.splice(2,1,"devendra"));
// console.log(name);


// ARRY METHODS-----------------


// let name = ["hemendra", "Eesha", "devendra",];
// console.log(name.push("rajkumari"));



// Function-----------------




// function name(){
//     console.log("hemendra singh");
// }
// name();

// function sum(a,b,c){
//     return (a+b)/c;
// }
// console.log(sum(10,20,2));



// const sum = (a,b,c) => {
//     return (a+b)/c;
// }
// console.log(sum(10,20,2));


// function vowelCount(str){
//     let count = 0;
//     for(const char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }



// let num = [2,3,4,5,6];
    
// num.forEach(num => {
//     console.log((num*num))
// });