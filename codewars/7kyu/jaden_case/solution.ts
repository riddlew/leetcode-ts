String.prototype.toJadenCase = function() {
  return this.replace(/\w\S*/g, word => word.replace(/^\w/g, c => c.toUpperCase()));
}