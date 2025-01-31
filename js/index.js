// Назва JavaScript
// Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’

// Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”

// let question = prompt('Яка "офіційна" назва JavaScript?', '');
// if(question == "ECMAScript") {
//   alert('Правильно!');
// } else {
//   alert('Ви не знаєте? ECMAScript!');
// }


// Покажіть знак
// Використовуючи if..else, напишіть код, що отримує число за допомогою prompt і потім виводить повідомлення alert:

// 1, якщо значення більше нуля,
// -1, якщо менше нуля,
// 0, якщо дорівнює нулю.
// У цьому завданні ми припускаємо, що введене значення завжди є числом.


// let number = prompt("Напиши число", 0);
// if (number > 0){
//   alert(1);
// }
// else if (number < 0){
//   alert(-1);
// }
// if (number = 0){
//   alert(0);
// }


// Перепишіть 'if' на '?'
// Перепишіть конструкцію if, використовуючи умовний оператор '?':
// let result;

// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }
// let a = 2;
// let b = 1;
// let result = (a + b < 4) ? 'Нижче' : 'Вище';
// console.log(result);




// Перепишіть if..else, використовуючи декілька тернарних операторів '?'.

// Для зручності читання рекомендується розділити код на кілька рядків.
// let message;

// if (login == 'Працівник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// let message = (login == 'Працівник') ? 'Привіт' : 
// (login == 'Директор') ? 'Вітаю' :
// (login == '') ? 'Немає логіну' : 
// '';

// Який результат І?
// alert( 1 && null && 2 );
// console.log(null);


// Який результат alerts, об'єднаних за допомогою І?
// Що виведе код нижче?
// alert( alert(1) && alert(2) );
// console.log(1);
// console.log(undefined);

// Результат АБО І АБО
// alert( null || 2 && 3 || 4 );
// console.log(3);

// Перевірте діапазон
// Напишіть умову if, щоб перевірити, чи age знаходиться між 14 та 90 включно.

// “Включно” означає, що age може досягати країв 14 або 90.


// if (age >= 14 && age <= 90);


// Перевірте логін
// Напишіть код, який запитує логін за допомогою prompt.

// Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть “Я вас не знаю”.

// Пароль перевіряється наступним чином:

// Якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”,
// Інший рядок – покажіть “Неправильний пароль”,
// Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”.


// let login = prompt("Введіть логін");
// if (login === "Admin"){
//   let parol = prompt("Введіть пароль", "");
// if( parol === "Господар") {
//   alert("Welcome!");
// } else if (parol === "" || parol === null){
//   alert("Canceled");
// } else {
//   alert("Wrong password");
// }
// } else if (login === "" || login === null){
//   alert("Canceled");
// }else{
//   alert("I don't know you");
// }



// Останнє значення циклу
// Яке останнє значення буде виведено на екран? Чому?
// let i = 3;

// while (i) {
//   alert( i-- );
// }
// alert(i--); // покаже 3, потім зменшить i до 2

// alert(i--) // покаже 2, потім зменшить i до 1

// alert(i--) // покаже 1, потім зменшить i до 0

// все, перевірка while (i) зупинить цикл. Відповідь 0



// Яке значення виведе цикл "while"?

// Запишіть для кожного циклу значення, які він виведе. Потім порівняйте з відповіддю.

// Чи виводять обидва цикли однакові значення?

// 1. Префіксна форма ++i:
// let i = 0;
// while (++i < 5) alert( i );

// alert(1 )
// alert(2 )
// alert(3 )
// alert(4 )


// Виведіть парні числа
// Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for(let i = 2; i <= 10; i++){
//   if(i % 2 === 0){
//     alert(1);
//   }
// }

// Замініть цикл "for" на "while"
// Замініть цикл for на while так, щоб поведінка не змінилася (щоб вивід залишився той самий).
// for (let i = 0; i < 3; i++) {
//   alert( `число ${i}!` );
// }
// let i = 0;
// while ( i < 3) {
//   alert( `число ${i}!` );
//   i++;
// }

// Повторяти цикл, доки ввід невірний
// Напишіть цикл, який пропонує prompt ввести число більше за 100. Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.

// Цикл повинен запитувати число доти, доки відвідувач не введе число, більше за 100, або не скасує ввід/введе порожній рядок.

// Ми припускаємо, що відвідувач вводитиме лише числа. В цьому завданні не обов’язково реалізовувати оброблення нечислового введення.


// let number;
// do{
// number = prompt("Введи число більше за 100", 100);
// // або другим аргументом нічого не вказувати,
// } while (number <=100 && number);
// console.log(number);


// Вивести прості числа
// Напишіть код, який виводить всі прості числа в діапазоні від 2 до n.

// Для n = 10 результат повинен бути 2,3,5,7.

// P.S. Код також повинен легко модифікуватися для будь-якого числа n.

// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++){
//   for (let j = 2; j < i; j++){
//     if(i % j === 0 )continue nextPrime;
//   }
//   alert (i);
// }



// Перепишіть конструкцію "switch" в аналогічну з використанням "if"
// Напишіть код з використанням if..else, що відповідає наступній конструкції switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Ми підтримуємо і ці браузери' );
//     break;

//   default:
//     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
// }


// let browser = prompt("Введіть назву вашого браузера:");
// if (browser == 'Edge') {
//   alert( "You've got the Edge!" );
// } else if ( browser == 'Chrome'|| browser == 'Firefox'|| browser == 'Safari'|| browser == 'Opera'){
//   alert( 'Ми підтримуємо і ці браузери' );
// }else {
//   alert( 'Маємо надію, що ця сторінка виглядає добре!' );
// }


// Перепишіть умови "if" в конструкцію "switch"
// Перепишіть код нижче використовуючи одну конструкцію switch:
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt('a?', '');
// switch(a) {
//   case(a == 0):
//   alert( 0 );
//   break;
  
//   case(a == 1):
//   alert( 1 );
//   break;
//   case (a == 2):
//   case (a == 3):
//  alert( '2,3' );
//  break;
// }
