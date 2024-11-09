const getObjectKeys = (obj) => {
    const res = [];
    for (let key in obj) {
        res.push(key)
    }
    return res
}