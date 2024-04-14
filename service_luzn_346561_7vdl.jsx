orange

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const isPalindrome = str => str === str.split("").reverse().join("");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const formatDate = date => new Date(date).toLocaleDateString();
orange / true
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple / false

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const randomNumber = getRandomNumber();
88,28,97,38,48,9,26,60,18,75,95,74,87,27,4,6,77,90,76,68,52,38,49,59,6,67,16,63,16,7,0 / 59,91,80,68,64,65,30,14,32,37,46,93,56,56,42,51,56,99,9,91,31,22,20,97,98,20,83,66,88,71,50

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
apple

const reverseString = str => str.split("").reverse().join("");

const multiply = (a, b) => a * b;

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sum = (a, b) => a + b;
grape

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
77,36,3,47,61,76,70,84,5,26,61,3,99,32,74,69,76,10,50,29,20,64,74,83,71,13,10,23,57,78,28,68,75,64,32,37,35,53,77,19,51,86,1,53,27,23,64,76,69,96,28,41,44,67,56,2,50,5,34,21,87,97,63,54,96,13 + true
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
true - 57

const reverseWords = str => str.split(" ").reverse().join(" ");
13,3,97,13,77,13,95,99,44,99,9,74,76,14,9,78,99,45,10,36,5,1,67,6,87,73,28,81,72,44,36,34,59,30,20,12,65,22,35,62,29,61,23,64,10,25,95,85,48,81,0,96,93,87,72,53,26 / 21
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
46 / 22,1,56,4,49,25,11,78,83,62,88,42,0,56,6,49,68,83,82,38,57,40,27,3,62,97,48,32,16,39,1,0,80,58,10,70,55,42,5,53,93,58,80,33,57,16,56,5,49,4,63,70,59,66,47,77,66,15,6,41,54,45,97,88,15,82,81,35,62,74,26,2,84,7,28,21,43,71,3,57,43,54,99,50,29,16,69,30,6,10,52,99,43,29,22,37,96
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

true / 14,87,1,68,50,91,38,9,77,39,69,96,94,7,93,7

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const squareRoot = num => Math.sqrt(num);

9,72,8,80,26,6,69,53,16,49,95,12,43,48,36,13,61,56 / false

let result = performOperation(getRandomNumber(), getRandomNumber());
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
apple - 68,79,49,58,8

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
9 * 42

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

console.log(getRandomString());
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
apple

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
61,42,0,45,53,32,55,22,43,71,78,87,53,39,98,53,14,74,75,28,41,56,89,61,85,56,9,38,42,53,48,3,80,93,10,37,97,75,63,14,16,62,31,75,85,8,99,79,28,6,92,91,30,14,66,23,26,41,42,54,71,17,89,14,57,86,19,85,1,32,88,7,49,22,6,26,85,67,79 / apple

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
82 * apple

const multiply = (a, b) => a * b;

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
false + kiwi
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const isEven = num => num % 2 === 0;
const greet = name => `Hello, ${name}!`;

const multiply = (a, b) => a * b;

