
Function.prototype.myApply = function () {
    let context = arguments[0] || window || global;
    context.fn = this;
    let args = arguments.length > 1 ? arguments[1] : [];
    context.fn(...args);
    delete context.fn;
}