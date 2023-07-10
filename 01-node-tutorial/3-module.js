const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

const { john, peter } = names


require('./7-mind-grenade')

sayHi('john')
sayHi(john)
sayHi(peter)