// Define the greetings
const greetings = [
	"Good morning",
	"Morning",
	"Good morning y'all",
	"Morning y'all",
	"M",
	"m",
	"gm",
	"GM",
	".",
	" ",
	"nn",
	"ᵐ",
	"ᵍᵐ",
	"ᴹ",
	"ᴳᴹ",
	"Gₘ",
	"₉ₘ",
	"ₘ",
	"Top of the morning to you (Irish: Cinn an tíde dhuit)",
	"Bright and early",
	"Rise and shine",
	"Greetings",
	"Salutations",
	"Hey there",
	"Hello, morning",
	"Howdy",
	"Good day",
	"Greetings, everyone",
	"Hello, world",
	"Hey, sunshine",
	"Bonjour (French: Good morning)",
	"Guten Morgen (German: Good morning)",
	"Buenos días (Spanish: Good morning)",
	"Buongiorno (Italian: Good morning)",
	"Kaliméra (Greek: Good morning)",
	"Ohayo (Japanese: Good morning)",
	"Annyeonghaseyo (Korean: Good morning)",
	"Aloha kakahiaka (Hawaiian: Good morning)",
	"Shubh prabhat (Hindi: Good morning)",
	"Selamat pagi (Indonesian: Good morning)",
	"As-salamu alaykum (Arabic: Peace be upon you)",
	"Goeie more (Afrikaans: Good morning)",
	"God morgen (Norwegian: Good morning)",
	"Dobro jutro (Croatian: Good morning)",
	"Dzień dobry (Polish: Good morning)",
	"Bore da (Welsh: Good morning)",
	"Labas rytas (Lithuanian: Good morning)",
	"Buna dimineata (Romanian: Good morning)",
	"Dobré ráno (Slovak: Good morning)",
	"Hyvää huomenta (Finnish: Good morning)",
	"Sabah al-khair (Arabic: Good morning)",
	"Sabahu al-khayr (Arabic: Good morning)",
	"Zao shang hao (Mandarin Chinese: Good morning)",
	"Namaste (Hindi: A respectful greeting)",
	"Magandang umaga (Filipino: Good morning)",
	"Godan daginn (Icelandic: Good morning)",
	"Arajo (Basque: Good morning)",
	"Góðan morgun (Icelandic: Good morning)",
	"Gunaydin (Turkish: Good morning)",
	"Kalimera (Greek: Good morning)",
	"Shubhodaya (Sanskrit: Good morning)",
	"God morgon (Swedish: Good morning)",
	"Suprabaatham (Tamil: Good morning)",
	"Jo napot (Hungarian: Good day)",
	"Günaydın (Turkish: Good morning)",
	"Kali mera (Greek: Good morning)",
	"Sawubona (Zulu: Hello)"
];

window.onload = function () {
	// Change background color to light blue
	var background = document.querySelector('.background');
	background.style.backgroundColor = '#FFB6C1';

	// Wait for the sunrise animation to finish
	var sun = document.querySelector('.sun');
	sun.addEventListener('animationend', function () {
		// Show the message
		var messageContainer = document.getElementById('message-container');
		messageContainer.classList.remove('hidden');

		// Display "Good Morning" messages with greetings and suffixes
		var counter = document.getElementById('counter');
		greetings.forEach(function (greeting) {
			for (var i = 0; i <= 20; i++) {
				var h1 = document.createElement('h1');
				h1.textContent = greeting + ' ' + i + getSuffix(i);
				counter.appendChild(h1);
			}
		});
	});
};

// Function to get the appropriate suffix for a number
function getSuffix(num) {
	var suffix = '';
	if (num === 11 || num === 12 || num === 13) {
		suffix = 'th';
	} else {
		var lastDigit = num % 10;
		switch (lastDigit) {
			case 1:
				suffix = 'st';
				break;
			case 2:
				suffix = 'nd';
				break;
			case 3:
				suffix = 'rd';
				break;
			default:
				suffix = 'th';
				break;
		}
	}
	return suffix;
}
