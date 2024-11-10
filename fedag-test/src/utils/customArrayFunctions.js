//Подсмотрел reduce т.к он самый сложный в реализации и мне с ним не справиться, я сделал остальные по аналогии
//В данный момент своего обучения я застрял как раз на асинхронном програмировании
Array.prototype.myReduce = function(cb , a) {
    if (typeof cb !== "function") {
        throw new TypeError(cb + " is not a function");
      }
    let acc = a;
    let startIndex = 0;
     if (acc === undefined) {
        if (this.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        acc = this[0];
        startIndex = 1
     }
     for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
          acc = cb(acc, this[i], i, this);
        }
      }
    
      return acc;
}
Array.prototype.myMap = function(cb , a) {
    if (typeof cb !== "function") {
        throw new TypeError(cb + " is not a function");
      }
      const res = [];
      for (let i = 0; i < this.length; i++) {
        if (i in this) {
          result.push(cb.call(a, this[i], i, this));
        }
      }
    
      return res;
}

Array.prototype.myFilter = function(cb , a) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const el = this[i];
            if (cb.call(a, el , i, this)) {
                res.push(el)
            }
        }
    }
    return res
}