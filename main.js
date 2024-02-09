// Secret Message Project
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// original array length
console.log(secretMessage.length);
// remove the last string on original array
secretMessage.pop();
// updated array length
console.log(secretMessage.length);
// log updated array with last item removed
console.log(secretMessage);
// add 'to' and 'Program' to the end of the array
secretMessage.push('to');
secretMessage.push('Program');
// log the updated array
console.log(secretMessage);
// replace an item in the array and reassign that index number to new item
secretMessage[7] = 'right';
console.log(secretMessage);
// remove first item in array, and replace it
// secretMessage.shift(); // can do it this way, but can use splice like below to do it also
secretMessage.splice(0, 1, 'Programing')
console.log(secretMessage);
//
secretMessage.splice(6, 5, 'know,');
console.log(secretMessage);

console.log(secretMessage.join(' '));
