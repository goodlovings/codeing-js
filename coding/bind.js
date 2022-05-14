Function.prototype.myBind = function () {
    let context = arguments[0] || window;
    context.fn = this;
    let args = [];
    for (let index = 0; index < arguments.length; index++) {
        index > 0 && args.push(this.arguments[index]);
    }
    let f = function () {
        for (let index = 0; index < arguments.length; index++) {
            args.push(this.arguments[index]);
        }
        context.fn(...args);
        delete context.fn;
    }
    return f;
}