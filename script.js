// ===== Required quotes array =====
const quotes = [
  { text: "The best way to predict the future is to create it", category: "Motivation" },
  { text: "Code is like humor. When you have to explain it, it's bad.", category: "Programming" },
  { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" }
];

// ===== Display random quote =====
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

function displayRandomQuote() {  // الاسم بالضبط
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteDisplay.innerHTML = "";

    const quoteText = document.createElement("p");
    quoteText.textContent = `"${quote.text}"`;

    const quoteCategory = document.createElement("span");
    quoteCategory.textContent = `— ${quote.category}`;
    quoteCategory.style.display = "block";
    quoteCategory.style.fontStyle = "italic";
    quoteCategory.style.marginTop = "8px";

    quoteDisplay.appendChild(quoteText);
    quoteDisplay.appendChild(quoteCategory);
}

newQuoteBtn.addEventListener("click", displayRandomQuote);

displayRandomQuote();

// ===== Add new quote =====
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");
const addQuoteBtn = document.getElementById("addQuoteBtn");

function addQuote() {
    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim();

    if (text === "" || category === "") {
        alert("Please enter both a quote and a category!");
        return;
    }

    quotes.push({ text, category });

    newQuoteText.value = "";
    newQuoteCategory.value = "";

    displayRandomQuote();

    alert("Quote added successfully!");
}

addQuoteBtn.addEventListener("click", addQuote);
