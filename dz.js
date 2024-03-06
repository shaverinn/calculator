// function counter(str) {
//   const array = str.toLowerCase().split("");

//   let count = 0;

//   const gl = ["e", "o", "i", "y", "a", "u"];

//   for (let i = 0; i < array.length; i++) {
//     if (gl.includes(array[i])) {
//       count++;
//     }
//   }
//   return count;
// }



// console.log(counter("hello"));
// console.log(counter("Hi, how are you?"));
// console.log(counter("javascript"));

// function replace(str) {
//   const array = ["a", "A"];
//   const text = str.split("");
//   for (let i = 0; i < text.length; i++) {
//     if (array.includes(text[i])) {
//       text[i] = "#";
//     }
//   }

//   return text.join("");
// }

// console.log(replace("Apple"));
// console.log(replace("Hi, how are you?"));
// console.log(replace("javascript"));



// function upercase(str) {
//     const array = str.split(" ")
//     let result = ""

//     for (let i=0; i<array.length; i++) {
//         const s = array[i][0].toUpperCase()
//         const other = array[i].slice(1)
//         result =  result + s + other + ' ';
//     }

//     return result
// }

// console.log(upercase("hello world"));
// console.log(upercase("hi, how are you?"));
// console.log(upercase("javascript"));



// function sum (array) {
//     let counter = 0 
//     for (let i=0; i<array.length; i++) {
//         counter = counter + array[i] 
//     }
//     return counter
// }
// console.log(sum([1,3,1,3,7]));











// const words = ["август", "кот", "яблоко", "программирование"]; 

// function transforms (array) {
//     for (let i=0; i<array.length; i++) {
//         array[i] = array[i].split("").reverse().join("")
//     }
//     return array;
// }       

// console.log(transforms(words));
// Ожидаемый результат: ["тсугва", "ток", "окльобя", "енировмиргоргарп"]



//Дан массив чисел, и вам нужно создать новый массив, содержащий каждое второе число из исходного массива.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Ожидаемый результат: [2, 4, 6, 8, 10] 

// function nextcicl (array) {
//     let result = []
//     for (let i=0; i<array.length; i++) {
//         if (i % 2 !== 0 ) {
//             result.push(array[i])
//         } 

//     }

//     return result
// }

// nextcicl(numbers)

// console.log(nextcicl(numbers))



//Вам предоставлен массив, и вам нужно изменить его порядок на обратный без использования метода reverse().

// function reverse (array) {
//     let result = []
//     for (let i=array.length-1; i>=0; i--) {
//          result.push(array[i])
//     }
//     return result
// } 



// const originalArray = [10, 20, 30, 40, 50]; // Ожидаемый результат: [50, 40, 30, 20, 10]

// console.log(reverse(originalArray))



















//Вы создаете функцию для шифрования сообщений в стиле Виженера. 
//Ваша функция должна принимать на вход ключ и строку для шифрования, а затем возвращать зашифрованное сообщение. 
//Каждая буква в сообщении должна сдвигаться в соответствии с алфавитом ключа.



// Пример encodeVigenere("код", "программирование"); // Ожидаемый результат: "ришхрхчеосуиркц"




//Задача 2: "Менеджер задач"
//Вы разрабатываете простой менеджер задач. Вам нужно создать объект, который будет представлять список задач. 
//В объекте должны быть методы для добавления новой задачи, удаления задачи и отметки задачи как выполненной.

 
// Пример const taskManager = new TaskManager(); taskManager.addTask("Помыть посуду"); 
//taskManager.addTask("Выучить JavaScript"); taskManager.completeTask("Выучить JavaScript"); 
//taskManager.showTasks(); // Ожидаемый результат: ["Помыть посуду"]

// class TaskManager {
//     tasks = []

//     addTask(task) {
//         this.tasks.push(task)
//     }
//     completeTask(task) {
//         let result = []
//        for(let i=0; i<this.tasks.length; i++) {
//         if (task!=this.tasks[i] ) {
//             result.push(this.tasks[i])
//         }
//        }
       
//        this.tasks =result;
//     }

//     showTasks() {
//         return this.tasks
//     }

// }

// const taskManager = new TaskManager();

// taskManager.addTask('9999')
// taskManager.addTask('s0000')
// taskManager.addTask('8899')
// taskManager.completeTask('9999')
// console.log (taskManager.showTasks())