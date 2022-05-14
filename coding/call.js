Function.prototype.myCall = function () {
    let context = arguments[0] || window || globalThis;
    context.fn = this;
    let args = arguments.length > 1 ? arguments.slice(1) : [];
    context.fn(...args);
    delete context.fn;
}