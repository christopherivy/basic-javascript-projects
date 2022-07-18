const quotes = [
	{
		name: 'Nelson Mandela',
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
	},
	{
		name: 'Steve Jobs',
		quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
	},
	{
		name: 'Oprah Winfrey',
		quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
	},
	{
		name: 'Anne Frank',
		quote: "Whoever is happy will make others happy too."
	},
	{
		name: 'Maya Angelou',
		quote: "You will face many defeats in life, but never let yourself be defeated."
	},
];


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
	let number = Math.floor(Math.random() * quotes.length);
	quoteAuthor.innerHTML = quotes[ number ].name;
	quote.innerHTML = quotes[ number ].quote;
}