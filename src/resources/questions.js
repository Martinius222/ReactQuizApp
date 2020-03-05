const questionList = [
    {
        question: "What is the capital of Italy?",
        answers: ["Rome", "Pisa", "Firenze", "Napoli"],
        correctInt: 0
    },
    {
        question: "What is the capital of Norway?",
        answers: ["Trondheim", "Bergen", "Kirkenes", "Oslo"],
        correctInt: 3
    },
    {
        question: "What is the capital of the USA?",
        answers: ["Philadelphia", "Washington DC", "New York", "Los Angeles"],
        correctInt: 1
    },
    {
        question: "What is the capital of Sweden?",
        answers: ["Karlstad", "Kiruna", "Stockholm", "Haninge"],
        correctInt: 2
    },
    {
        question: "What is the capital of China?",
        answers: ["Beijing", "Hong Kong", "Wanton", "Shanghai"],
        correctInt: 0
    },
    {
        question: "What is the capital of Ucraine?",
        answers: ["Chernobyl", "Minsk", "Kiev", "Odessa"],
        correctInt: 2
    },
    {
        question: "What is the capital of Argentina?",
        answers: ["San Yuan", "Mendosa", "Santa Fe", "Buenos Aires"],
        correctInt: 3
    },
    {
        question: "What is the capital of Mexico?",
        answers: ["Tijuana", "Mexico City", "Guadalajara", "Juárez"],
        correctInt: 1
    },
    {
        question: "What is the capital of Canada?",
        answers: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        correctInt: 2
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


