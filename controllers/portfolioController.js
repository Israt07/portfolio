const { getPortfolioData } = require('../models/portfolioModel');

exports.getIndex = (req, res) => {
    const data = getPortfolioData();
    res.render('index', { data });
};
