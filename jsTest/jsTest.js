//1. 3번 dispatchEvent.innerValue = "클릭됨"
//2. if(fruits.this("apple"))
//3. 
const numbers = [1,2,3,4,5,6];
const even = numbers.filter(num => numbers % 2 === 0 && numbers > 0);

//4. 
setTimeout(() => {
    alert("3초 후 실행!");
}, 3000);

//5. push

//6. count

//7. 
const lion = () => {
    console.log("자바스크립트 마스터를 해보자!");
}
lion();

//8. 
const isLogin = true ? "환영합니다!" : false ? "접근 권한이 없습니다." : "접근 권한이 있습니다.";
alert(isLogin);

//9.
let string = "끝";

do{
    prompt("무엇을 말하고 싶나요?");
} while(string == "끝")

//10.
let sum =+ num;

prompt("숫자를 입력하세요.");

while(num > 0){
    alert("1부터 해당값까지의 합은 ${sum} 입니다.");
    sum =+ num;
}

//11.
randomNum()

//12.
const arr3 = arr1 + arr2;

console.log(arr3);
console.log(arr3[2]);
console.log(arr3[3], arr3[4], arr3[5], arr3[6], arr3[7]);

//13.
let now =  new Date();

console.log(Date);

//14.


//15. 콜백

const age = 20;
const name = "아기사자";
const person = "안녕, ${age}살 ${name} !!";

// function callWithAge(callback){
//     const age = 20;
// }

prompt("이름을 입력하세요");
prompt("나이를 입력하세요");

alert(person); 

// 

