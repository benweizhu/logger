let _context

module.exports = {
    init: function (context) {
        _context = context;
    },
    log: function (...params) {
        console.log(`${_context.functionName}`, ...params);
    }
}