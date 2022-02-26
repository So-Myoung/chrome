const quotes = [
    {
        quote: "Never regret anything that made you smile.",
        author: "Mark Twain",
    },
    {
        quote: "One man who has a mind and knows it acn always beat ten men who haven't and don't.",
        author: "George Bernard Shaw",
    },        
    {
        quote: "Although the world is full of suffering, it is full also of the overcoming of it.",
        author: "Helen Keller",
    },
    {
        quote: "The hardest work is to go idle.",
        author: "Jewish Proverb",
    },
    {
        quote: "Liberty without learning is always in peril and learning without liberty is always in vain.",
        author: "John F. Kennedy",
    },
    {
        quote: "Love dose not consist in gazing at each other, but in looking together in the same direction.",
        author: "Antoine de saint-Exupery",
    },
    {
        quote: "Anything you'er good at contributes to happiness.",
        author: "Bertrand Russell",
    },
    {
        quote: "You can learn a little from victory; you can learn everything from defeat.",
        author: "Christy Mathewson",
    },
    {
        quote: "Never, never, never, never give up.",
        author: "Winston Churchill",
    },
    {
        quote: "And still, I rise",
        author: "Maya Angelou",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;