const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q2 = "What's an activity you like doing? ";
const q3 = "What do you listen to while doing that? ";
const q4 = "Which meal is your favourite (eg: dinner, brunch, etc.)? ";
const q5 = "What's your favourite thing to eat for that meal? ";
const q6 = "Which sport is your absolute favourite? ";
const q7 = "What is your superpower? In a few words, tell us what you are amazing at! ";

rl.question("What's your name? Nicknames are also acceptable :) ", (a1) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(q2, (a2) => {
    rl.question(q3, (a3) => {
      rl.question(q4, (a4) => {
        rl.question(q5, (a5) => {
          rl.question(q6, (a6) => {
            rl.question(q7, (a7) => {
              console.log(`${a1} enjoys ${a2}ing while listening to ${a3}. This coder \nloves noshing on ${a5} for ${a4} and stays active by playing\n ${a6}. His/her ability to ${a7} caught the attention of Vought, \nand they've been making the world a better \nplace ever since.`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
  
});

