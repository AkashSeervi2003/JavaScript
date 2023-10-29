// a = 5
// b = 10
// document.getElementById('first').innerHTML = a + b
// document.write( a + b )
// window.alert(a+b)
// console.log(a+b)

// a = 12;
// b = "Akash";
// c = a + b; // JavaScript converts 'a' to a string and concatenates with 'b'
// d = true;
// document.write(c + "<br>");
// document.write(typeof(a) + "<br>");
// document.write(typeof(b) + "<br>");
// document.write(typeof(c) + "<br>");
// document.write(typeof(d) + "<br>");
// document.write('<p id="first"></p><button id="myButton" onclick="document.getElementById(\'first\').innerText = \'Welcome\'">Click Here</button>'); 

// document.write(button)
// document.write('<button>Hi</button>')
// function myFunction(x,y){
//     return x+y;
// }
// document.write(myFunction(12,3))




// const users = {
//     firstName : 'Akash',
//     lastName : 'Seervi',
//     Age : 20,
//     Qualification : 'Software Engineer'
// }
// document.getElementById('first').innerHTML=users.firstName + " is a " + users.Qualification;


// const person = {
//     firstName: 'Akash',
//     lastName : 'Seervi',
//     fullName :
//          function(){
//             return this.firstName + " " + this.lastName;
//          }
// }
// const user = {
//     firstName: 'Anshika',
//     lastName : 'Gupta',
// }
// let fullName = person.fullName.bind(user)
// document.getElementById('first').innerHTML = fullName();




let people = ["Anshika","Pratim","Akul"];
// document.getElementById('first').innerHTML = people.length
document.getElementById('first').innerHTML = people;
people.push("Akash");
