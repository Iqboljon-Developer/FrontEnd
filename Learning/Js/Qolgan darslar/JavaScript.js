// let number = 1;
// let output;

// switch (number) {
//     case 1:
//         output = "bir"
//         break
//     case 2:
//         output = "ikki"
//         break
//     case 3:
//         output = "uch"
//         break
//     default:
//         output = "topilmadi"
//         break
// }

// console.log(output)

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let son = 1;
// let yigindi = 0;
// for (son; son <= 10; son++){
//     yigindi += son
// }

// console.log(yigindi)


// let son = 0;

// for (son; son < 10; son++){
//     if (son === 6){
//         continue
//     }
//     console.log(son)
// }

// let son = 0

// while (son < 10){
//     son += 3
//     console.log("Salom dunyo")
// }


// let i = 0

// do {
//     console.log('salom dunyo');
//     i++;
// } while(i < 10);

// let sonlar = []

// function findNumber(min, max, number) {
//     for (min; min < max; min++) {
//         sonlar.unshift(min)
//     }
//     if (sonlar.find(number)) {
//         console.log("Siz korsatgan raqam bu sonlar ichida mavjud")
//     }
//     else {
//         console.log("Siz korsatgan raqam bu sonlar ichida mavjud emas")
//     }
// }

// findNumber(10, 100, 90)

// const inRange = (min, max, number) =>{
//     if (number >= min && number <= max){
//         console.log("Ichida")
//     }
//     else{
//         console.log("Ichida emas");
//     }
// }

// const minRange = 10;
// const maxRange = 30;
// const givenNumber = 1;

// inRange(minRange, maxRange, givenNumber)


// const SimpleMeasure = (son1, son2, amal) => {
//     amal = String(amal)
//     switch (amal){
//         case '-':
//             console.log(son1 - son2)
//             break
//         case '+':
//             console.log(son1 + son2);
//             break
//         case '*':
//             console.log(son1 * son2)
//             break
//         case '/':
//             console.log(son1 / son1);    
//             break
//     }
// }

// SimpleMeasure(10, 10, '-')

// let sonlar = [1,2,3,4,509,6,7,8];

// const Biggest = (array) => {
//     number = 0;
//     let BiggestNumber = 0;
//     for (number; number < array.length; number++){
//         son = array.pop()
//         if (BiggestNumber <= son){
//             BiggestNumber = son
//         }
//         else{
//             continue
//         }
//     }
//     console.log(BiggestNumber)
// }

// Biggest(sonlar)  


// const heading1 = document.getElementById('sarlavha')
// console.log(heading1);
// heading1.remove()

// const inputELS = document.getElementsByName('username');
// const inputEL = inputELS[0]
// console.log(inputEL);
// inputEL.remove()

// const headings = document.getElementsByClassName('heading')
// console.log(headings);
// headings[0].remove()

// const heading = document.getElementsByTagName('h1')
// console.log(heading);

// const heading1 = document.querySelector('#sarlavha');
// console.log(heading1);
// heading1.remove()

const headings = document.querySelectorAll('h1')
console.log(headings);