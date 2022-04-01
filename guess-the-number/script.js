 const game = {
title: "Guess the Number!",
biggestNum: 100,
smallestNum: 1,
secretNum: null,
prevGuesses: [],
 play: function(){
                   
                   this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
                   const guess = parseInt(this.getGuess());
                   
                   const result = this.render(this.secretNum, guess);
                   while(!result){
                       let guess = parseInt(this.getGuess());
                       const result = this.render(this.secretNum, guess);
                   }
               },
               getGuess: function(){
                 
                   let guess = window.prompt("Enter a guess between " + this.smallestNum + " and " + this.biggestNum);
                   return guess;
               },
               render: function(secret, guess){
             
                   let guessess = ""
                  
                   for(let i = 0;i < this.prevGuesses.length;i++)
                   {
                      
                       guessess += this.prevGuesses[i] + ", ";
                   }
                   guessess += guess;
                   
                   if(guess == secret){
                       window.alert("Congrats! You guessed the number in " + this.prevGuesses.length + " Guesses");
                       return true;
                   }
               
                   else if(guess > secret){
                       
                       this.prevGuesses.push(guess);
                       
                       window.alert("Your guess is too High\nPrevious Guessess: " + guessess);
    
                   }
                 
                   else{
                       
                       this.prevGuesses.push(guess);
                    
                       window.alert("Your guess is too Low\nPrevious Guessess: " + guessess);
                      
                   }
                   return false;
               }
       };
       game.play()