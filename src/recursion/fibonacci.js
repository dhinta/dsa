function fib (n, cache = {}) {
    if(n <= 2) return 1;

    if(cache[n]) return cache[n];

    const result = fib(n - 1, cache) + fib(n - 2, cache);

    return cache[n] = result;

    return result;
}

console.log(fib(5))
console.log(fib(400))