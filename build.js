const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { getPortfolioData } = require('./models/portfolioModel');

const data = getPortfolioData();
const viewPath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'docs', 'index.html');
const scriptSource = path.join(__dirname, 'public', 'js', 'script.js');
const scriptDest = path.join(__dirname, 'docs', 'js', 'script.js');

// Ensure docs/js directory exists
const docsJsDir = path.dirname(scriptDest);
if (!fs.existsSync(docsJsDir)) {
    fs.mkdirSync(docsJsDir, { recursive: true });
}

// Copy script.js
fs.copyFileSync(scriptSource, scriptDest);
console.log("Successfully copied docs/js/script.js");

ejs.renderFile(viewPath, { data }, (err, str) => {
    if (err) {
        console.error("Error rendering EJS:", err);
        process.exit(1);
    }
    fs.writeFileSync(outputPath, str);
    console.log("Successfully built docs/index.html");
});
