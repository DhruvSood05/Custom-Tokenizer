##Basic JavaScript Tokenizer
This is a simple, browser-based application that demonstrates the fundamental concept of a tokenizer. It takes a sentence as input and converts it into a sequence of numerical "tokens." It can also perform the reverse operation, decoding the tokens back into the original sentence.

How It Works
The application's core logic is contained within the CustomTokenizer class in the <script> tag.

Tokenizer: The encode(text) method processes the input. It first converts the text to lowercase and then uses a regular expression to split it into individual words, ignoring spaces and punctuation.

Vocabulary: As it processes each word, it checks if the word has been seen before.

If the word is new, it is added to a vocabulary object and assigned a new, sequential ID using an idCounter.

If the word has been seen, it uses the existing ID.

Decoding: The decode(tokenIds) method takes an array of numerical token IDs. It uses a reverseVocabulary object to look up the word associated with each ID and then joins the words back into a sentence.

How to Use
Open the HTML file in any modern web browser.

Type or paste a sentence into the text box.

Click the "Tokenize Text" button to see the numerical tokens generated for your sentence.

The "Decoded Text" area will show the sentence as it is reconstructed from the tokens.

Click the "Reset" button to clear the input and output fields, as well as the internal vocabulary, allowing you to start fresh.

Next Steps
This is a very basic implementation. You could extend this project by:

Handling punctuation and special characters more effectively.

Implementing a fixed, pre-defined vocabulary instead of generating new IDs on the fly.

Using more advanced tokenization methods like Byte-Pair Encoding (BPE) for better efficiency with longer texts.
