var intervalTime = 1000; // 100ms = 10x per sec

var names = ["John", "Elen", "Bob", "James", "Clark", "Adam", "Peter", "Anna", "Barbara", "Lily", "Jackob", "Lolita"]
var namesCount = names.length

var botMassages = ["Hello", "Nice weather", "It is raining now", "Icecream are so good!", "I like trains",
 "Pizza is super nuticous", "Run Forest. Run...", "it feels like dream", "Music is the Power", "Italian joke: ...",
 "Mummy", "Earth orbit is above us"];
var botMassagesCount = botMassages.length

function generateMessage(authorName, message){
    var color = Math.random()*5.99;
        color = Math.floor(color)

    return `<div class="col-sm-4 color-background-${color}">
        <h3 class="color-text-${color}">${authorName}</h3>
        <p class="color-text-${color}">${message}</p>
        <div/>`
}

function generateRandomMessage() {
    var authorNameIndex = Math.random()*(namesCount+0.999);
    authorNameIndex = Math.floor(authorNameIndex);
    var authorName = names[authorNameIndex];
    
    var messageTextIndex = Math.random()*(botMassagesCount+0.999);
    messageTextIndex = Math.floor(messageTextIndex)
    var messageText = botMassages[messageTextIndex]
    console.log(`Aidx: ${authorNameIndex}, A: ${authorName}, Midx: ${messageTextIndex}, M: ${messageText}`)
    return generateMessage(authorName, messageText);
}

function mainAppLoop(){
    if(!$) {
        return;
    }

    var messageDisplay = $("#messages-are-here");
    if(messageDisplay.length){
        messageDisplay.append(generateRandomMessage())
    }

}

//loop init
setInterval(mainAppLoop, intervalTime);
