// ===== Step 1–3: Dynamic Quote Generator =====

// Array of quotes
const quotes = [
    { text: "The best way to predict the future is to create it", category: "Motivation" },
    { text: "Code is like humor. When you have to explain it, it's bad.", category: "Programming" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");
const addQuoteBtn = document.getElementById("addQuoteBtn");

// Function to display a random quote
function displayRandomQuote() {
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

// Event listener for "Show New Quote" button
newQuoteBtn.addEventListener("click", displayRandomQuote);

// Function to add a new quote
function addQuote() {
    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim();

    if (!text || !category) {
        alert("Please enter both a quote and a category!");
        return;
    }

    quotes.push({ text, category });

    newQuoteText.value = "";
    newQuoteCategory.value = "";

    displayRandomQuote();
    alert("Quote added successfully!");
}

// Event listener for "Add Quote" button
addQuoteBtn.addEventListener("click", addQuote);

// Display a random quote on page load
displayRandomQuote();
