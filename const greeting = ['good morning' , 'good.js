const greeting = ['good morning' , 'good day to you' , 'top of the morning to you' , 'howdy partner']
const affirmation = ['lets focus on being positive today toward others' , 'lets make someones day better by being a part of it today' , 'lets help someone in need today']
const goodbye = ['have a nice day' , 'you got this' , 'lets get it done']

let randomQuote1 = Math.floor(Math.random() * greeting.length);
let randomQuote2 = Math.floor(Math.random() * affirmation.length);
let randomQuote3 = Math.floor(Math.random() * goodbye.length);

let newString = greeting[randomQuote1] + ', ' + affirmation[randomQuote2] + ', ' + goodbye[randomQuote3] + '.'

console.log(newString)