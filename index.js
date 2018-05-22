const {
    init
} = require('./logger.js')

const {
    runService
} = require('./service.js')


init({
    functionName: 'lambda'
})

runService('hi')
