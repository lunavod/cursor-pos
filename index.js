const platform = require('os').platform

let getCursorPos

if (platform=='win32') getCursorPos = require('windows-cursor-pos')
if (platform=='linux') getCursorPos = require('linux-cursor-pos')

module.exports = getCursorPos