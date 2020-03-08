const questionList = [
    {
        question: "What keyword is used to refer to a PARENT class's variables and methods?",
        answers: ["this", "super", "final", "extends"],
        correctInt: 1,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
    {
        question: "What keyword is used to refer to a class' OWN variables and methods?",
        answers: ["this", "super", "final", "extends"],
        correctInt: 0,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "What does the static keyword do?",
        answers: ["Prevents variables/methods from changing", "Prevents access to certain variables/methods", "Makes it possible to run code without a main function.", "Makes variables/methods available on the class level"],
        correctInt: 3,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "What is a CONSTRUCTOR used for?",
        answers: ["Declaring a new object/class", "Define a connection between two classes", "Get variables out of an object/class", "Building a new instance of an object/class"],
        correctInt: 3,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "How can you interact with PRIVATE variables/methods?",
        answers: ["By calling on them anywhere", "By setting them to public", "By using getters and setters", "You can't"],
        correctInt: 2,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "What's wrong with the variable: public int x = \"55\";",
        answers: ["Missing variable name", "Wrong datatype given", "Not private", "Missing static keyword"],
        correctInt: 1,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "What is: int[ ][ ] a = new int[5][5];",
        answers: ["An array of integers", "A two-dimensional integer array", "An arraylist limited to 5 inputs", "An invalid array declaration."],
        correctInt: 1,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "What keyword is used to prevent a variable/method from changing?",
        answers: ["this", "super", "final", "extends"],
        correctInt: 2,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "What is a PARAMETER?",
        answers: ["An input variable in methods and constructors", "A type of function/method in Java", "A logical operator in a calculation", "A fancy way of saying \"function\""],
        correctInt: 0,
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

];

export function getQuestions() {
  return questionList
}

export function randomizer(array){

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


