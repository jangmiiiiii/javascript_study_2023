// 반복문 for
/* 
    for(반복문변수생성; 변수활용조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반복실행문
    } 반복문 변수 조건이 거짓일때 for 끝나는 위치
*/
// 1-~10까지 반복하는 반복문 -> 1에서10까지가 아닌 10개를 반복할거구나로 인지하기
// for 자주 이용하는 지역변수명 = i, j, m, n, k
for(let i=0; i<11; i++){ //i=1 첫번째 시작 을 1로 하겠다 라는 뜻 //i<11; i++ i가 증가할때 까지 1씩 증가해라 갯수는 11개. 10번까지아님 세는숫자개념 x 갯수개념 0부터10까진 갯수11개니까
    console.log('hello js'+(i+1))
}
//0~5 반복문 증가버전
for(let i=0; i<=5; i++){ 
    console.log('반복문'+i)
}
for(let i=0; i<6; i++){ 
    console.log('반복문2'+i)
}
//5~0 반복문 감소버전
for(let i=5; i>=0; i--){
    console.log(i)
}
//10~30 반복문
for(let i=10; i<=30; i++ ){
    console.log(i)
}
//10~30 반복문 + 10~30 중 홀수만 반복 출력
for(let i=10; i<30; i++){
    if(i%2===1)
    console.log(i)
}
//DOM, 배열 사용하는 반복문
const study = ['html','css','javascript','figma','photoshop','illustrator']
/* console.log(study[0])
console.log(study[1])
console.log(study[2]) */
//객체의 수 length 속성
for(let i=0; i<study.length;  i++){ //i<=5 5까지 증가해라 라는뜻 . index는 0부터시작 :0,1,2,3,4 가 나오고length는 1부터시작!!하니 ->1,2,3,4,5 이렇게 5개가 나오는것임 주의-> 
    console.log(study[i])
}
for(let i=0; i<=study.length-1;  i++){ //i<=5 5까지 증가해라 라는뜻 . index는 0부터시작 :0,1,2,3,4 가 나오고length는 1부터시작!!하니 ->1,2,3,4,5 이렇게 5개가 나오는것임 주의-> 
    console.log(study[i])
}
// 객체의 수 length 속성
// 1. html 공부
// 2. css 공부
// 3. javascript 공부
// 4. figma 공부
// 5. photoshop 공부
// 6. illustrator 공부
for(let i=0; i<study.length; i++){
    console.log(`${i+1}. ${study[i]} 공부`)
}
//위 study 배열을 역순으로 출력하기 illustrator > html
console.log('------------------------------ 역순')
for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}.${study[i]} 공부`)
}

//반복문연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
//반복문 이용 coffee 배열 모두 출력
for(let i=coffee-1; i>=0; i++){
    console.log(coffee[i])
}