// Create random number variable for Player 1
var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1

// Create file path for Player 1's img 
var filePath1 = "./images/dice" + randomNumber1 + ".png"

// Change the src tag
document.querySelector("body > div > div:nth-child(2) > img").src = filePath1

// Create random number variable for Player 2
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1

// Create file path for Player 2's img 
var filePath2 = "./images/dice" + randomNumber2 + ".png"

// Change the src tag
document.querySelector("body > div > div:nth-child(3) > img").src = filePath2

// Player 1 wins 
if (randomNumber1 > randomNumber2){
    document.querySelector("body > div > h1").innerHTML = "🚩 Palyer 1 Wins!"    
}

// Player 2 wins 
else if (randomNumber2 > randomNumber1){
    document.querySelector("body > div > h1").innerHTML = "Palyer 2 Wins !🚩"    
}

// Two players tied 
else if (randomNumber1 === randomNumber2){
        document.querySelector("body > div > h1").innerHTML = "Draw!"
}
