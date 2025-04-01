const fs = require('fs');

function getRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function getRandomNumber() {
    return (Math.random() * 1000).toFixed(2);
}

function getRandomInteger() {
    return Math.floor(Math.random() * 1000);
}

function getRandomAlphanumeric() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let value = Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    let spacesBefore = ' '.repeat(Math.floor(Math.random() * 10));
    let spacesAfter = ' '.repeat(Math.floor(Math.random() * 10));
    return spacesBefore + value + spacesAfter;
}

const stream = fs.createWriteStream('data.txt');
let fileSize = 0;
while (fileSize < 10 * 1024 * 1024) {
    let data = [getRandomString(10), getRandomNumber(), getRandomInteger(), getRandomAlphanumeric()].join(',') + ',';
    stream.write(data);
    fileSize += Buffer.byteLength(data);
}
stream.end();