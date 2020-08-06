const fs = require('file-system');

const companies = JSON.parse(fs.readFileSync('server/data/companies.json'));
// const items = JSON.parse(fs.readFileSync('server/data/items.json'));

const updatedArr = [];

companies.forEach((item) => {
  updatedArr.push({
    name: item.name,
    url: item.url,
    country: item.country,
    _id: item.id,
  });
});

fs.writeFileSync('server/data/fixedCompanies.json', JSON.stringify(updatedArr));
