const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parseDATA = JSON.parse(bookJSON);
console.log(parseDATA.author);

fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title);
data.title = 'ace';
console.log(data.title);

const newData = JSON.stringify(data);
fs.writeFileSync('1-json.json', newData);