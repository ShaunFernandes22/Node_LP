const names = require('./4-names.js')
const say = require('./5-util.js')

const data = require('./6-alternate.js')
console.log(data)

for (let name in names) {
    say(name)
}
say('sara')
require('./7-mindgren.js')