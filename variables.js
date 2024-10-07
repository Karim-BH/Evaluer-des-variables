let age = prompt("Veuillez entrer votre âge:");

age = Number(age);

if (age < 3) {
    alert("Hello, Baby 🍼!");
} else if (age < 18) {
    alert("Hi! 👋");
} else if (age < 100) {
    alert("Greetings 🖖");
} else {
    alert("Wow... 😲");
}
