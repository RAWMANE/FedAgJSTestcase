export function isEmpty(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (obj && typeof obj === "object") {
      return Object.keys(obj).length === 0;
    }
    return false;
  }