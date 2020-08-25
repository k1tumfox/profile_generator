const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (a1) => {
  rl.question("What's an activity you like doing? ", (a2) => {
    rl.question("What do you listen to while doing that? ", (a3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (a4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (a5) => {
          rl.question("Which sport is your absolute favourite? ", (a6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (a7) => {
    
              
              console.log(`${a1} likes to ${a2} while listending to ${a3}.\n Their favourite dish to eat for ${a4} is ${a5}.\n ${a6} is their favourite sport, and they have the incredible\n ability to ${a7}.\n`);
              rl.close();
            });
          });
        });
      });
    });
  });

});


