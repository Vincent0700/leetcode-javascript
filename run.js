#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const DIR_SOLUTION = path.resolve(__dirname, './solutions');

function prefixInteger(num, length) {
    return (Array(length).join('0') + num).slice(-length);
}

function getScript(filePath, num) {
    const files = fs.readdirSync(filePath);
    for (let i = 0; i < files.length; ++i) {
        const filename = files[i];
        const filedir = path.join(filePath, filename);
        const stats = fs.statSync(filedir);
        const isFile = stats.isFile();
        const str = 's' + prefixInteger(num, 4);
        if (isFile && filename.indexOf(str) === 0) {
            return filedir;
        }
    }
}

const num = process.argv[2];
const scriptPath = getScript(DIR_SOLUTION, num);

if (scriptPath) {
    exec('/usr/bin/env node ' + scriptPath, (error, stdout) => {
        console.log(stdout);
    });
}
