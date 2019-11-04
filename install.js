const exec = require('child_process').exec;
const platform = require('os').platform

let moduleName
if (platform=="linux") moduleName = 'lunavod/linux-cursor-pos'
if (platform=="win32") moduleName = 'lunavod/windows-cursor-pos'

exec(`npm i ${moduleName}`).stdout.pipe(process.stdout);