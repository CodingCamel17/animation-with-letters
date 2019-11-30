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
    
    //adding text to container function
    appendingText(){
        this.container = document.querySelector(this.selector);
        this.container.innerText = this.text;
    }

    //adding random text to container function 
    appendingRandom(i, random){
        random = this.random;
        setTimeout(() => {
            this.container.innerText = random;
        }, i* this.options.randomTimeoutTime);
    }

    //final mixing letters function
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
