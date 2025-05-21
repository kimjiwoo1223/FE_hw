//채점 결과 (2/15)

//1. (x) 2번. innerValue라는 속성이 존재하지 않기 때문에
const div = document.querySelector("div");
div.addEventListener("click", () => {
    div.textContent = "클릭됨"
})

//2. (x) includes 는 특정 문자가 포함되어 있는지 확인하는 문자열 메소드
const fruits = ["banana", "apple", "orange"];

if(fruits.includes("apple")){
    console.log("사과 있음");
}

//3. (x) numbers가 아닌  num을 기준으로 
//const numbers = [1,2,3,4,5,6];
//const even = numbers.filter(num => num % 2 === 0 && num > 0);

//4. (o)
setTimeout(() => {
    alert("3초 후 실행!");
}, 3000);

//5. (x) ul에 li를 자식요소로 추가하는 것이기에 parent.appendChild(child)처럼 사용해야한다.
appendChild

//6. (x) textContent 는 텍스트 내용 제어하기에
textContent = count;

//7. (o)
const lion = () => {
    console.log("자바스크립트 마스터를 해보자!");
}
lion();

//8. (x) 변수 선언을 하고 alert에 message 추가
const isLogin =  true;

const message = isLogin ? "환영합니다!" : "접근 권한이 없습니다.";
alert(message);

//9. (x) 변수 선언하기..
let input;

do{
    input = prompt("무엇을 말하고 싶나요?");

} while(input !== "끝")

//10. (x) ${sum} 은 ``안에서 문자열로. 오류나서 주석처리로 대체.
// let num = prompt("숫자를 입력하세요.");
// let sum = 0;
// let i = 1;

// while(i <= num){
//     sum += i;
//     i++;
// }
// alert(`1부터 해당값까지의 합은 ${sum} 입니다.`)

//11. (x) 
//정수인 난수를 생성하려면 Math.random()함수와 Math.floor()함수를 사용.
function randomNum(){ //randomNum()함수 선언해주기.
    return Math.floor(Math.random() * 10) + 1;
}
let arr = []; //arr배열 선언해주기.
let sum = 0;

for(let i=0; i<3; i++){
    let num = randomNum();
    arr.push(num); // push()는 배열 맨 뒤에 값을 넣는 함수.
    sum += num; //sum = sum + num;

    document.write((i+1) + "번째 랜덤 난수:" + num + "<br>")
}

document.write(`3개의 합 : ${sum}`);


//12. (x) concat()으로 두 개의 배열 합치기
const arr1 = ["빨강", "주황", "노랑", "초록"];
const arr2 = ["파랑", "남색", "보라", "핑크"];
const arr3 = arr1.concat(arr2);

console.log(arr3);
console.log(arr3[3]);
console.log(arr3.slice(4,9));//slice()는 배열의 일부분을 잘라서 새 배열로 반환.

//13. (x)
const fixedDate = new Date(2025,4,2);//월은 0부터 시작하기에
console.log(fixedDate);

const today = new Date();
const todayStr = `오늘 날짜: ${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 <br>`;
document.write(todayStr);

const diffTime = today.getTime() - fixedDate.getTime();
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

document.write(`2025년 5월 2일로부터 ${diffDays}일이 지났습니다.`);
//14. (x) change()와 getElementById()사용
function change() {
    let nameTag = document.getElementById("name");
    let currentText = nameTag.innerText;

    if (currentText === "likelion_1") {
        nameTag.innerText = "likelion_2";
    } else if (currentText === "likelion_2") {
        nameTag.innerText = "likelion_3";
    } else {}
}


//15. 콜백 (x) 객체 person을 만들고 sayHello함수 추가해서 알림창에 보여주기
const name = prompt("이름을 입력하세요");
const age = prompt("나이를 입력하세요");

const person = {
    sayHello: function() {
        alert(`안녕, ${age}살 ${name} !!`);
    }
};
person.sayHello();

// 

