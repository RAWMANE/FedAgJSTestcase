//Не справился, но было интересно и я подсмотрел в интернете
export function makeObjectIterable(obj) {
    obj[Symbol.iterator] = function* () {
   for (let key of Object.keys(obj)) {
    yield [key , obj[key]];
   }
    }
    return obj
}