const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
    const objects = data.split(',').filter(Boolean);
    objects.forEach(obj => {
        let trimmed = obj.trim();
        if (!isNaN(trimmed) && trimmed.includes('.')) {
            console.log(`${trimmed} - Real Number`);
        } else if (!isNaN(trimmed)) {
            console.log(`${trimmed} - Integer`);
        } else if (/^[A-Za-z]+$/.test(trimmed)) {
            console.log(`${trimmed} - Alphabetical String`);
        } else {
            console.log(`${trimmed} - Alphanumeric`);
        }
    });
});