const common = `
    --require features/*.js 
    --require features/**/*.js 
    --format json:reports/report.json
    --format message:reports/report.ndjson 
    --format html:reports/report.html 
    --format progress-bar 
    --publish-quiet 
`;

module.exports = { 
    default: `${common}`,
};
