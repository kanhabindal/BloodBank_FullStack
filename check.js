const data = require("./centers.js");
const addQuotes = require("./qm.js");

for (let i = 0; i < data.length; i++) {
  const objectString = JSON.stringify(data[i]);
  const newObjectString = addQuotes(objectString);
  const newObj = JSON.parse(newObjectString);
  console.log(newObj);
}