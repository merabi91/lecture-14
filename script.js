// 1)შექმენით ერთ განზომილებიანი მსაივი საიდანაც for ციკლის მეშვებოთ დაბეჭდავთ მასივში არსებულ ყველა ელემენტს


// var numbers = [15,53,22,198,10,28,16,70,33,951];
// for (var i=0; i < numbers.length; i++) {
//     document.write(numbers[i])
// }



// 2)შექმენიტ
// ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის პარამეტრად და if
// else მეშვეობით დაბეჭდეთ რამე ინფორმაცია (მაგ: თუ რამე ნივთის ფასი
// მაღაზიაში არის 50 ლარზე მეტი ესეიგი ძვირია თუ 20-50 დიაპაზონშია მოქცეული
// საშუალო თუ ნაკლები იაფი)



var strSum = prompt("ნივთის ფასი");
function money(){
    strSum;
}

function price (){
    money();

    if (strSum >50) {
        document.write ("ძვირია")
    } 
    else if (strSum >= 20 && strSum <=50) {
        document.write ("საშუალო")
    }
    else if (strSum < 20) {
        document.write ("იაფი")
    }
}
price ();






// 3) მოცემული მასივიდან [ 15,53,22,198,10,28,16,70,33,951 ] დაბეჭდეთ მხოლოდ კენტი რიცხვები

// ვიდეო მასალა

// https://www.youtube.com/watch?v=xjAu2Y2nJ34


// var numbers = [15,53,22,198,10,28,16,70,33,951];
// for (var i=0; i < numbers.length; i++) {
//     if(numbers[i]%2 == 1) {
//         document.write(numbers[i] + " ")
//     }
// }
