const greetings = require("./greeting.js");
const test = require("./test_module.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

greetings.greetingSpanish();

greetings.greetingIceLandic();

test.quickMaths(2,6);