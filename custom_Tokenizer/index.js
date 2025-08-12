// A simple class to handle tokenization and decoding
class CustomTokenizer {
  constructor() {
    // The vocabulary maps a word to a unique ID
    this.vocabulary = {};
    // The reverse vocabulary maps an ID back to a word
    this.reverseVocabulary = {};
    this.idCounter = 0;
  }

  // Method to encode text into token IDs
  encode(text) {
    // Convert to lowercase and split by whitespace and punctuation
    // This is a very basic rule-based approach
    const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];
    const tokenIds = [];

    tokens.forEach((token) => {
      // Check if the token is already in the vocabulary
      if (this.vocabulary[token] === undefined) {
        // If not, add it to the vocabulary with a new ID
        this.vocabulary[token] = this.idCounter;
        this.reverseVocabulary[this.idCounter] = token;
        this.idCounter++;
      }
      // Push the token's ID to the result array
      tokenIds.push(this.vocabulary[token]);
    });

    return tokenIds;
  }

  // Method to decode token IDs back into text
  decode(tokenIds) {
    const words = [];
    tokenIds.forEach((id) => {
      // Look up the word for each ID in the reverse vocabulary
      if (this.reverseVocabulary[id] !== undefined) {
        words.push(this.reverseVocabulary[id]);
      }
    });
    // Join the words with a space to form the sentence
    return words.join(" ");
  }
}

// Get DOM elements
const inputTextarea = document.getElementById("inputText");
const tokenizeBtn = document.getElementById("tokenizeButton");
const resetBtn = document.getElementById("resetButton");
const tokenIdsOutputDiv = document.getElementById("tokenIdsOutput");
const decodedTextOutputDiv = document.getElementById("decodedTextOutput");

// Create a new instance of our tokenizer
const tokenizer = new CustomTokenizer();

// Function to handle the tokenization process
const handleTokenize = () => {
  const text = inputTextarea.value;
  if (!text) return;

  // Encode the text
  const tokenIds = tokenizer.encode(text);
  tokenIdsOutputDiv.textContent = tokenIds.join(", ");

  // Decode the token IDs back to text
  const decodedText = tokenizer.decode(tokenIds);
  decodedTextOutputDiv.textContent = decodedText;
};

// Function to reset the application state
const handleReset = () => {
  inputTextarea.value = "";
  tokenIdsOutputDiv.textContent = "";
  decodedTextOutputDiv.textContent = "";
  // Re-initialize the tokenizer to clear the vocabulary
  tokenizer.vocabulary = {};
  tokenizer.reverseVocabulary = {};
  tokenizer.idCounter = 0;
};

// Event listeners
tokenizeBtn.addEventListener("click", handleTokenize);
resetBtn.addEventListener("click", handleReset);
