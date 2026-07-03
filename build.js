const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { getPortfolioData } = require('./models/portfolioModel');

const data = getPortfolioData();
const viewPath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'docs', 'index.html');

ejs.renderFile(viewPath, { data }, (err, str) => {
    if (err) {
        console.error("Error rendering EJS:", err);
        process.exit(1);
    }
    fs.writeFileSync(outputPath, str);
    console.log("Successfully built docs/index.html");
});
