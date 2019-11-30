class randomLettersAnimation{
    constructor(textContainerSelector, text, options){
        const defaultOptions = {
            randomTimeoutTime : 150,
            animationTimeoutTime : 1000,
        };
        this.options = Object.assign({}, defaultOptions, options);
        this.selector = textContainerSelector;
        this.container = null;
        this.text = text;
        this.possibleLetters = '-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}QWERTYUIOPASDFGHJKL';
        this.random = '';
        this.lettersAnimation();
    };
    //funkcja wstawiająca podany tekst do wybranego kontenera
    appendingText(){
        this.container = document.querySelector(this.selector);
        this.container.innerText = this.text;
    }

    //funkcja z ograniczeniem czasowym, która wstawia wygenerowane randomowo znaki do wybranego kontenera
    appendingRandom(i, random){
        random = this.random;
        setTimeout(() => {
            this.container.innerText = random;
        }, i* this.options.randomTimeoutTime);
    }

    //funkcja z ograniczeniem czasowym, która wstawia randomowe znaki do tekstu który po chwili sie pojawia za pomocą metody this.text.substr.
    lettersAnimation(){
        setTimeout(() => {
            for(let i=0; i<this.text.length+1; i++){
                this.random = this.text.substr(0, i);
                for(let j=i; j<this.text.length; j++){
                    this.random += this.possibleLetters.charAt(Math.floor(Math.random() * this.possibleLetters.length));
                }
                this.appendingRandom(i, this.random);
            }
            this.appendingText();
        }, this.options.animationTimeoutTime);
    }
}

const text1 = new randomLettersAnimation (
    '#text1',
    '//Hello World',
    {
        randomTimeoutTime : 80,
        animationTimeoutTime : 2000,
    });