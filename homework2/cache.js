function cache(fn) {
    const cacheStore = {};

    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cacheStore[key]) {
            console.log("Возвращаем из кэша");
            return cacheStore[key];
        }

        const result = fn(...args);
        cacheStore[key] = result;
        
        return result;
    };
}

export default cache;
