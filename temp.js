const https = require('https');
const fs = require('fs');

// Set the URL of the CSV file
const csvUrl = 'https://www.dropbox.com/s/nb8vxfk7gzs9hd2/blood-banks.csv?dl=1';

// Download the contents of the CSV file
https.get(csvUrl, (res) => {
  let csvContent = '';

  res.on('data', (chunk) => {
    csvContent += chunk;
  });

  res.on('end', () => {
    // Split the CSV content into an array of rows
    const csvRows = csvContent.split(/\r?\n/);

    // Extract the headers (first row) of the CSV file
    const headers = csvRows[0].split(',');

    // Map each row of the CSV file to a JavaScript object
    const csvObjects = csvRows.slice(1).map((row) => {
      const values = row.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });

    // Write the resulting array of JavaScript objects to a new .js file
    const outputFilePath = 'corrected.js';
    fs.writeFileSync(outputFilePath, `const data = ${JSON.stringify(csvObjects, null, 2)};\nmodule.exports = data;`);

    // Print a success message to the console
    console.log(`Converted ${csvUrl} to ${outputFilePath}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading CSV file: ${err.message}`);
});
