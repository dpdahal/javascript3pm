// function addNumber() {
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = parseInt(num1) + parseInt(num2);
//     document.getElementById("result").value = result;
//     document.getElementById('app').innerHTML = result;
// }

// console.log(document.getElementById('app'));

// console.log(document.getElementsByClassName('box'))

// console.log(document.getElementsByTagName('h1'))

// document.querySelector('#app').innerHTML = '<h1>Karuna</h1>';

// setInterval(function() {
//     alert("Hello Karuna");
// },5000);

// setTimeout(function() {
//     alert("Hello Karuna");
// },2000);


// console.log(new Date());

// function myCk() {
//     let dd = new Date();
//     let tm = dd.toLocaleTimeString();
//     document.getElementById('app').innerHTML = tm;
// }
//
// setInterval(function () {
//     myCk();
// }, 1000);


// alert("Hello Karuna");

// confirm("Are you sure?");

// prompt("Enter your name");

// function game() {
//     let message = confirm("Do you want to play?");
//     if (message == true) {
//         let question = prompt("What is the capital of Nepal?");
//         if (question == "Kathmandu") {
//             alert("Correct Answer");
//             let question2 = prompt("What is the capital of India?");
//             if (question2 == "New Delhi") {
//
//             }
//         } else {
//             alert("Wrong Answer");
//         }
//
//     } else {
//         alert("You clicked cancel");
//     }
// }
//
// game();


function changeBoxColor() {
    let box = document.getElementById('app');
    box.style.backgroundColor = 'green';
}

setTimeout(function () {
    changeBoxColor();
}, 3000);


function hideBox() {
    let box = document.getElementById('app');
    box.style.display = 'none';
}