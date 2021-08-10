function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return (function namedFunction() {return `hi`;});
}

function returnsAnAnonymousFunction() {
    return (function() {return `bye`;});
}