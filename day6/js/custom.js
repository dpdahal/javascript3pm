// function connection() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Connected");
//         }, 2000);
//     });
// }
//
// async function insert() {
//     await connection().then(function (result) {
//         console.log(result);
//     });
//
//     console.log("test was success")
// }
//
// insert();

// let tasks = new Promise(function (resolve, reject) {
//     let task = true;
//     if (task) {
//        setTimeout(function () {
//            resolve("task was success");
//        },2000)
//     } else {
//         reject("task was failed");
//     }
// });
//
// console.log(tasks);
//
// tasks.then(function (result) {
//     console.log(result);
// }).catch(function (error) {
//     console.log(error);
// });


// function getStudents() {
// let http = new XMLHttpRequest();
// http.onreadystatechange =function (){
//     if (this.readyState == 4 && this.status == 200){
//         document.getElementById("app").innerHTML = this.responseText;
//     }
// }
// // http.open("GET", "js/students.txt");
// http.open("GET", "https://jsonplaceholder.typicode.com/users");
// http.send();

// /*fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
//     return response.json();
// }).then(function (result) {
//     console.log(result);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log("finally");
// });
// }*/

// exception handling


// try{
//     alertf("test");
// }catch (e) {
//     console.log("alert function chaina");
// }

// function  student(name){
//     if (name === undefined){
//         throw "name is undefined";
//     }
//     this.name = name;
// }
//
// // let student1 = new student();
// try {
//     let student1 = new student();
//     console.log(student1);
// }catch (e) {
//     console.log(e);
// }
//
//
// console.log("hello")


// let a = new Set(["ram", "shyam", "hari", "hari"]);
// console.log(a);