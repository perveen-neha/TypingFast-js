var countDownSeconds = 60;
words = ["marshmallow clouds", "rainbow unicorns with polka dots", "jellyfish in the sky", "glittery raindrops", "hot air balloon races on the moon", "banana peels on the sidewalk", "rubber chickens that quack instead of cluck", "bubblegum flavored ice cream", "hiccups that last for hours", "upside down pineapple cake with cherries on top", "polka dot pajamas", "a parade of llamas", "disco dancing flamingos", "singing karaoke in the rain", "bouncing beach balls", "playing hopscotch with kangaroos", "a tower of pancakes with syrup and whipped cream flowing like a waterfall", "bubble baths with rubber duckies and toy boats", "pirate ships on the high seas", "cotton candy clouds that melt in your mouth and tickle your nose", "ice skating with penguins", "underwater tea parties with seahorses and starfish","peanut butter jelly time", "bananas on a trampoline", "hopscotch", "pogo stick", "umbrella", "pineapple pizza with extra cheese", "flip-flops", "socks", "mismatched sunglasses", "disco ball", "glitter paint", "rainbow unicorns", "moonwalking giraffe", "birthday cake candles blowing wishes", "clouds", "cotton candy", "skateboard ramp", "roller skates", "neon lights", "popcorn machine", "silly straws bubble wrap", "giggles laughter silly hats", "rubber duckie", "cowboy boots", "lemonade stand", "grass stains", "piggyback rides", "pillow forts", "tooth fairy", "magic show", "hula hoop", "ping pong table", "pool noodles", "snorkeling goggles mermaid tail", "pirate treasure map"]


const btn = document.getElementById("startBtn");
const quote = document.getElementById("typing__quote")
const textArea = document.getElementById("textArea")

function displayQuote() {
    let random = Math.floor(Math.random()*(words.length))
    quote.innerText = words[random]
    console.log(random);

    textArea.removeListener("keydown", ()=> {
        startTimer();
        displayQuote();
    })
}


function startTimer() {
    console.log("clicked");
    var x = setInterval(function() {
    countDownSeconds--;
    document.getElementById("countdown__timer").innerHTML =  countDownSeconds ;
    if (countDownSeconds <= 0) {
        var wpm = words.length
        document.getElementById("countdown__timer").innerHTML = "You type: " + wpm + " wpm" ;
        textArea.disabled = true;
    }
    }, 1000);

    textArea.removeEventListener("keydown", ()=> {
        startTimer();
        displayQuote();
    })
}


btn.addEventListener("click" ,()=> {
    startTimer();
    displayQuote();
})
