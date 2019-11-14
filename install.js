const exec = require('child_process').exec;
const platform = require('os').platform

let moduleName

if (platform=="win32") {
  moduleName = 'lunavod/windows-cursor-pos'
} else {
  moduleName = 'lunavod/linux-cursor-pos'
}

console.log(`Installing ${moduleName}...`)

exec(`npm i ${moduleName}`).stdout.pipe(process.stdout);
