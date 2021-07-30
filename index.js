String.prototype.fillPadStart = function(width, pad) {
    return this.length >= width ? this : new Array(width - this.length + 1).join(pad) + this;
}